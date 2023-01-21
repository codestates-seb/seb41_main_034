package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.ImageStorageService;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.review.dto.ReviewDto;
import com.codestates.seb41_main_034.review.dto.ReviewPatchDto;
import com.codestates.seb41_main_034.review.dto.ReviewPostDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;
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

    // TODO: 작성자 이름을 불러오기 위해 UserService 주입 필요

    private final ImageStorageService imageStorageService;

    private final ObjectMapper mapper;

    public ReviewDto createReview(ReviewPostDto reviewPostDto, List<MultipartFile> images) {
        // 상품 정보 조회
        Product product = productService.readProduct(reviewPostDto.getProductId());

        // 이미지 저장
        List<String> imageUrlList = imageStorageService.store(images);

        String imageUrls;
        try {
            imageUrls = mapper.writeValueAsString(imageUrlList);
        } catch (JsonProcessingException e) {
            throw new BusinessLogicException(ExceptionCode.REVIEW_CANNOT_WRITE_IMAGE_URLS);
        }

        // 엔티티 객체 생성
        Review review = reviewService.createReview(reviewPostDto, imageUrls);

        // DTO 매핑 후 반환
        return review.toDto(mapper, product);
    }

    public ReviewDto readReview(long questionId) {
        // 후기 조회
        Review review = reviewService.readReview(questionId);

        // 상품 정보 조회
        Product product = productService.readProduct(review.getProductId());

        // DTO 매핑 후 반환
        return review.toDto(mapper, product);
    }

    public PaginatedData<ReviewDto> readProductReviews(int productId, Pageable pageable) {
        // 상품 정보 조회
        Product product = productService.readProduct(productId);

        // 후기 목록 Page 조회
        Page<Review> reviewPage = reviewService.readProductReviews(productId, pageable);

        // DTO 매핑 후 반환
        return PaginatedData.of(reviewPage.map(review -> review.toDto(mapper, product)));
    }

    public PaginatedData<ReviewDto> readReviewHistory(
            int createdBy, LocalDate from, LocalDate to, Pageable pageable) {
        // from, to 기본값 설정
        from = Optional.ofNullable(from).orElse(LocalDate.of(2023, 1, 1));
        to = Optional.ofNullable(to).orElse(LocalDate.now());

        // 회원의 후기 목록 Page 조회
        Page<Review> reviewPage = reviewService.readReviewHistory(createdBy, from, to, pageable);

        // 후기 목록에 있는 상품 정보를 한 번에 조회
        Set<Integer> productIds = reviewPage.get().map(Review::getProductId).collect(Collectors.toSet());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // DTO 매핑 후 반환
        return PaginatedData.of(reviewPage.map(review -> review.toDto(mapper, productMap.get(review.getProductId()))));
    }

    public ReviewDto updateReview(long reviewId, ReviewPatchDto reviewPatchDto, List<MultipartFile> images) {
        Review review = reviewService.readReview(reviewId);

        List<String> imageUrlList =
                imageStorageService.update(review.getImageUrlList(mapper), reviewPatchDto.getDeleteImage(), images);

        String imageUrls;
        try {
            imageUrls = mapper.writeValueAsString(imageUrlList);
        } catch (JsonProcessingException e) {
            throw new BusinessLogicException(ExceptionCode.REVIEW_CANNOT_WRITE_IMAGE_URLS);
        }

        // 후기 수정 후 반환
        Review updateReview = reviewService.updateReview(reviewId, reviewPatchDto, imageUrls);

        // DTO 매핑 후 반환
        return updateReview.toDto(mapper);
    }

    public void deleteReview(long reviewId) {
        // 후기 삭제
        reviewService.deleteReview(reviewId);
    }

}
