package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.common.storage.ImageStorageService;
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
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@AllArgsConstructor
@Service
public class ReviewFacade {

    private final ReviewService reviewService;

    private final ProductService productService;

    private final UserService userService;

    private final ImageStorageService imageStorageService;

    private final JsonListHelper helper;

    public ReviewDto createReview(ReviewPostDto reviewPostDto, List<MultipartFile> images) {
        // 상품 정보 조회
        Product product = productService.readProduct(reviewPostDto.getProductId());

        // 이미지 저장
        String imageUrls = Optional.ofNullable(images)
                .map(imageStorageService::store).map(helper::listToJson).orElse(null);

        // 엔티티 객체 생성
        Review review = reviewService.createReview(reviewPostDto, imageUrls);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

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

    public ReviewDto updateReview(long reviewId, ReviewPatchDto reviewPatchDto, List<MultipartFile> images) {
        Review review = reviewService.readReview(reviewId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != review.getCreatedBy()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        // 이미지 삭제
        List<String> imageUrlList = helper.jsonToList(review.getImageUrls());
        List<String> newImageUrlList = Optional.ofNullable(reviewPatchDto).map(ReviewPatchDto::getDeleteImage)
                .map(deleteImage -> imageStorageService.delete(imageUrlList, deleteImage))
                .orElse(imageUrlList);

        // 이미지 추가
        String imageUrls = Optional.ofNullable(images).map(imageStorageService::store)
                .map(urlList -> Stream.concat(newImageUrlList.stream(), urlList.stream()).collect(Collectors.toList()))
                .map(helper::listToJson).orElse(helper.listToJson(newImageUrlList));

        // 후기 수정 후 반환
        Review updateReview = reviewService.updateReview(reviewId, reviewPatchDto, imageUrls);

        // DTO 매핑 후 반환
        return updateReview.toDto(helper);
    }

    public void deleteReview(long reviewId) {
        // 후기 조회
        Review review = reviewService.readReview(reviewId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != review.getCreatedBy()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        // 이미지 삭제
        imageStorageService.delete(helper.jsonToList(review.getImageUrls()));

        // 후기 삭제
        reviewService.deleteReview(reviewId);
    }

}
