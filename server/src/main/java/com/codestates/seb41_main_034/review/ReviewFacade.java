package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.order.OrderService;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.review.dto.ReviewDto;
import com.codestates.seb41_main_034.review.dto.ReviewPatchDto;
import com.codestates.seb41_main_034.review.dto.ReviewPostDto;
import com.codestates.seb41_main_034.user.entity.User;
import com.codestates.seb41_main_034.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class ReviewFacade {

    private final ReviewService reviewService;

    private final ProductService productService;

    private final UserService userService;

    private final OrderService orderService;

    private final JsonListHelper helper;

    public ReviewDto createReview(ReviewPostDto reviewPostDto) {
        Order order = orderService.readOrder(reviewPostDto.getOrderId());

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (order.getCreatedBy() != user.getId()) {
            throw new BusinessLogicException(ExceptionCode.REVIEW_WRONG_ORDER_ID);
        }

        order.getOrderProducts().stream()
                .filter(orderProduct -> orderProduct.getProductId() == reviewPostDto.getProductId())
                .findAny().orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_ORDERED));

        // 상품 정보 조회
        Product product = productService.readProduct(reviewPostDto.getProductId());

        // 엔티티 객체 생성
        Review review = reviewService.createReview(reviewPostDto);


        // DTO 매핑 후 반환
        return review.toDto(helper, product, user.getMaskedName());
    }

    public ReviewDto readReview(long reviewId) {
        // 후기 조회
        Review review = reviewService.readReview(reviewId);

        // 상품 정보 조회
        Product product = productService.readProduct(review.getProductId());

        User user = userService.findVerifiedUserById(review.getCreatedBy());

        // DTO 매핑 후 반환
        return review.toDto(helper, product, user.getMaskedName());
    }

    public PaginatedData<ReviewDto> readProductReviews(int productId, Pageable pageable) {
        // 상품 정보 조회
        Product product = productService.readProduct(productId);

        // 후기 목록 Page 조회
        Page<Review> reviewPage = reviewService.readProductReviews(productId, pageable);

        Set<Integer> userIds = reviewPage.stream().map(Review::getCreatedBy).collect(Collectors.toSet());

        Map<Integer, String> idNameMap = userService.getVerifiedUsers(userIds).stream()
                .collect(Collectors.toMap(User::getId, User::getMaskedName));

        // DTO 매핑 후 반환
        return PaginatedData.of(
                reviewPage.map(review -> review.toDto(helper, product, idNameMap.get(review.getCreatedBy()))));
    }

    public PaginatedData<ReviewDto> readReviewHistory(LocalDate from, LocalDate to, Pageable pageable) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        // from, to 기본값 설정
        from = Optional.ofNullable(from).orElse(LocalDate.of(2023, 1, 1));
        to = Optional.ofNullable(to).orElse(LocalDate.now());

        // 회원의 후기 목록 Page 조회
        Page<Review> reviewPage = reviewService.readReviewHistory(user.getId(), from, to, pageable);

        // 후기 목록에 있는 상품 정보를 한 번에 조회
        Set<Integer> productIds = reviewPage.get().map(Review::getProductId).collect(Collectors.toSet());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // DTO 매핑 후 반환
        return PaginatedData.of(
                reviewPage.map(review ->
                        review.toDto(helper, productMap.get(review.getProductId()), user.getMaskedName())));
    }

    public ReviewDto updateReview(long reviewId, ReviewPatchDto reviewPatchDto) {
        Review review = reviewService.readReview(reviewId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != review.getCreatedBy()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        // 후기 수정 후 반환
        Review updateReview = reviewService.updateReview(reviewId, reviewPatchDto);

        // DTO 매핑 후 반환
        return updateReview.toDto();
    }

    public void deleteReview(long reviewId) {
        // 후기 조회
        Review review = reviewService.readReview(reviewId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != review.getCreatedBy()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        // 후기 삭제
        reviewService.deleteReview(reviewId);
    }

}
