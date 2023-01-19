package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.question.dto.AnswerRequestDto;
import com.codestates.seb41_main_034.question.dto.QuestionDto;
import com.codestates.seb41_main_034.question.dto.QuestionPatchDto;
import com.codestates.seb41_main_034.question.dto.QuestionPostDto;
import com.codestates.seb41_main_034.question.entity.Question;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class QuestionFacade {

    private final QuestionService questionService;

    private final ProductService productService;

    // TODO: 작성자 이름을 불러오기 위해 UserService 주입 필요

    public QuestionDto createQuestion(QuestionPostDto questionPostDto) {
        // 상품 정보 조회
        Product product = productService.readProduct(questionPostDto.getProductId());

        // 엔티티 객체 생성
        Question question = questionService.createQuestion(questionPostDto);

        // DTO 매핑 후 반환
        return question.toDto(product);
    }

    public QuestionDto readQuestion(long questionId) {
        // 문의 조회
        Question question = questionService.readQuestion(questionId);

        // 상품 정보 조회
        Product product = productService.readProduct(question.getProductId());

        // DTO 매핑 후 반환
        return question.toDto(product);
    }

    public PaginatedData<QuestionDto> readProductQuestions(int productId, Pageable pageable) {
        // 상품 정보 조회
        Product product = productService.readProduct(productId);

        // 문의 목록 Page 조회
        Page<Question> questionPage = questionService.readProductQuestions(productId, pageable);

        // DTO 매핑 후 반환
        return PaginatedData.of(questionPage.map(question -> question.toDto(product)));
    }

    public PaginatedData<QuestionDto> readQuestionHistory(
            int createdBy, LocalDate from, LocalDate to, Pageable pageable) {
        // from, to 기본값 설정
        from = Optional.ofNullable(from).orElse(LocalDate.of(2023, 1, 1));
        to = Optional.ofNullable(to).orElse(LocalDate.now());

        // 회원의 문의 목록 Page 조회
        Page<Question> questionPage = questionService.readQuestionHistory(createdBy, from, to, pageable);

        // 문의 목록에 있는 상품 정보를 한 번에 조회
        Set<Integer> productIds = questionPage.get().map(Question::getProductId).collect(Collectors.toSet());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // DTO 매핑 후 반환
        return PaginatedData.of(questionPage.map(question -> question.toDto(productMap.get(question.getProductId()))));
    }

    public QuestionDto updateQuestion(long questionId, QuestionPatchDto questionPatchDto) {
        // 문의 수정 후 반환
        Question question = questionService.updateQuestion(questionId, questionPatchDto);

        // DTO 매핑 후 반환
        return question.toDto();
    }

    public void deleteQuestion(long questionId) {
        // 문의 삭제
        questionService.deleteQuestion(questionId);
    }

    public QuestionDto createAnswer(long questionId, AnswerRequestDto answerRequestDto) {
        // 답변 추가
        Question question = questionService.createAnswer(questionId, answerRequestDto);

        // DTO 매핑 후 반환
        return question.toDto();
    }

    public QuestionDto updateAnswer(long questionId, AnswerRequestDto answerRequestDto) {
        // 답변 수정
        Question question = questionService.updateAnswer(questionId, answerRequestDto);

        // DTO 매핑 후 반환
        return question.toDto();
    }

}
