package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.dto.ProductResponseDto;
import com.codestates.seb41_main_034.question.dto.AnswerResponseDto;
import com.codestates.seb41_main_034.question.dto.QuestionPostDto;
import com.codestates.seb41_main_034.question.dto.QuestionResponseDto;
import com.codestates.seb41_main_034.question.entity.Answer;
import com.codestates.seb41_main_034.question.entity.Question;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final ProductService productService;

    // TODO: 작성자 이름을 불러오기 위해 UserService 주입 필요

    public QuestionResponseDto createQuestion(QuestionPostDto questionPostDto) {
        // 상품 ID 검증 및 상품 정보 조회
        ProductResponseDto productDto = productService.getVerifiedProduct(questionPostDto.getProductId());

        // 엔티티 객체 생성 및 데이터 입력
        Question question = new Question();
        question.setProductId(questionPostDto.getProductId());
        question.setBody(questionPostDto.getBody());

        // 엔티티 DB에 저장
        Question createdQuestion = questionRepository.save(question);

        // DTO 매핑 후 반환
        return questionToDto(createdQuestion, productDto);
    }

    @Transactional(readOnly = true)
    public QuestionResponseDto readQuestion(long questionId) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 상품 정보 조회
        ProductResponseDto productDto = productService.getVerifiedProduct(question.getProductId());

        // DTO 매핑 후 반환
        return questionToDto(question, productDto);
    }

    private QuestionResponseDto questionToDto(Question question, ProductResponseDto productDto) {
        List<String> imageUrls = productDto.getImageUrls();

        return new QuestionResponseDto(
                question.getId(),
                question.getProductId(),
                productDto.getName(),
                imageUrls.isEmpty() ? null : imageUrls.get(0),
                question.getBody(),
                answerToDto(question.getAnswer()),
                question.getCreatedBy(),
                question.getModifiedBy(),
                question.getCreatedAt(),
                question.getModifiedAt()
        );
    }

    private AnswerResponseDto answerToDto(Answer answer) {
        return new AnswerResponseDto(
                answer.getQuestionId(),
                answer.getBody(),
                answer.getCreatedBy(),
                answer.getModifiedBy(),
                answer.getCreatedAt(),
                answer.getModifiedAt()
        );
    }

}
