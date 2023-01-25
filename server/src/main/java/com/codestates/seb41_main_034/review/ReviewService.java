package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.review.dto.ReviewPatchDto;
import com.codestates.seb41_main_034.review.dto.ReviewPostDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;

@AllArgsConstructor
@Service
@Transactional
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public Review createReview(ReviewPostDto reviewPostDto, String imageUrls) {
        // 엔티티 객체 생성 및 데이터 입력
        Review review = new Review();
        review.setProductId(reviewPostDto.getProductId());
        review.setBody(reviewPostDto.getBody());
        Optional.ofNullable(imageUrls).ifPresent(review::setImageUrls);

        // 엔티티 DB에 저장 및 반환
        return reviewRepository.save(review);
    }

    @Transactional(readOnly = true)
    public Review readReview(long reviewId) {
        // DB에서 후기 ID 조회, 없는 경우 예외 발생
        return reviewRepository.findById(reviewId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public Page<Review> readProductReviews(int productId, Pageable pageable) {
        // 상품에 해당하는 후기 목록 조회
        return reviewRepository.findByProductId(productId, pageable);
    }

    @Transactional(readOnly = true)
    public Page<Review> readReviewHistory(
            int createdBy, LocalDate from, LocalDate to, Pageable pageable) {
        // 회원의 후기 목록 조회
        return reviewRepository.findByCreatedByAndDateBetween(createdBy, from, to, pageable);
    }

    public Review updateReview(long reviewId, ReviewPatchDto reviewPatchDto, String imageUrls) {
        // DB에서 후기 ID 조회, 없는 경우 예외 발생
        Review review = readReview(reviewId);

        // 후기 내용 변경
        Optional.ofNullable(reviewPatchDto).map(ReviewPatchDto::getBody).ifPresent(review::setBody);

        // 이미지 주소 변경
        Optional.ofNullable(imageUrls).ifPresent(review::setImageUrls);

        return review;
    }

    public void deleteReview(long reviewId) {
        // DB에서 후기 ID 조회, 없는 경우 예외 발생
        Review review = readReview(reviewId);

        // 후기 삭제 처리
        review.setDeleted(true);
    }

}
