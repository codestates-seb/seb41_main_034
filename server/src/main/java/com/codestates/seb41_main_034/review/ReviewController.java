package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.common.response.Response;
import com.codestates.seb41_main_034.review.dto.ReviewDto;
import com.codestates.seb41_main_034.review.dto.ReviewPatchDto;
import com.codestates.seb41_main_034.review.dto.ReviewPostDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Positive;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@RestController
@Validated
@RequestMapping("/api/v1")
public class ReviewController {

    private final ReviewFacade reviewFacade;

    @PostMapping("/review")
    public ResponseEntity<Response<ReviewDto>> postReview(
            @Valid @RequestPart("data-json") ReviewPostDto reviewPostDto,
            @RequestPart(name = "images", required = false) List<MultipartFile> images
    ) {
        return new ResponseEntity<>(Response.of(reviewFacade.createReview(reviewPostDto, images)), HttpStatus.CREATED);
    }

    @GetMapping("/review/{reviewId}")
    public ResponseEntity<Response<ReviewDto>> getReview(@Positive @PathVariable long reviewId) {
        return new ResponseEntity<>(Response.of(reviewFacade.readReview(reviewId)), HttpStatus.OK);
    }

    @GetMapping("/product/{productId}/review")
    public ResponseEntity<Response<PaginatedData<ReviewDto>>> getProductReviews(
            @Positive @PathVariable int productId,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        return new ResponseEntity<>(
                Response.of(reviewFacade.readProductReviews(productId, pageable)), HttpStatus.OK);
    }

    @GetMapping("/review/review-history")
    public ResponseEntity<Response<PaginatedData<ReviewDto>>> getReviewHistory(
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate from,
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate to,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        // TODO: 인증된 회원 ID를 받아와야 한다.
        int createdBy = 1;

        return new ResponseEntity<>(
                Response.of(reviewFacade.readReviewHistory(createdBy, from, to, pageable)), HttpStatus.OK);
    }

    @PatchMapping("/review/{reviewId}")
    public ResponseEntity<Response<ReviewDto>> patchReview(
            @Positive @PathVariable long reviewId,
            @Valid @RequestPart("data-json") ReviewPatchDto reviewPatchDto,
            @RequestPart(name = "images", required = false) List<MultipartFile> images
    ) {
        return new ResponseEntity<>(
                Response.of(reviewFacade.updateReview(reviewId, reviewPatchDto, images)), HttpStatus.OK);
    }

    @DeleteMapping("/review/{reviewId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteReview(@Positive @PathVariable long reviewId) {
        reviewFacade.deleteReview(reviewId);
    }

}