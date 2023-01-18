package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.dto.ProductResponseDto;
import com.codestates.seb41_main_034.question.dto.*;
import com.codestates.seb41_main_034.question.entity.Answer;
import com.codestates.seb41_main_034.question.entity.Question;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final ProductService productService;

    // TODO: 작성자 이름을 불러오기 위해 UserService 주입 필요

    public QuestionResponseDto createQuestion(QuestionPostDto questionPostDto) {
        // 상품 ID 검증 및 상품 정보 조회
        ProductResponseDto productDto = productService.readProduct(questionPostDto.getProductId());

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
        ProductResponseDto productDto = productService.readProduct(question.getProductId());

        // DTO 매핑 후 반환
        return questionToDto(question, productDto);
    }

    @Transactional(readOnly = true)
    public PaginatedResponseDto<QuestionResponseDto> readProductQuestions(int productId, Pageable pageable) {
        // 상품 ID 검증 및 상품 정보 조회
        ProductResponseDto productDto = productService.readProduct(productId);

        // 상품에 해당하는 문의 ID 목록 조회
        Page<Long> questionIdPage = questionRepository.findIdByProductId(productId, pageable);

        // 문의 ID 목록에 따른 문의 목록 조회
        List<Question> questions = questionRepository.findAllById(questionIdPage.getContent(), pageable.getSort());

        // DTO 매핑 후 반환
        List<QuestionResponseDto> questionDtos =
                questions.stream().map(question -> questionToDto(question, productDto)).collect(Collectors.toList());

        return new PaginatedResponseDto<>(
                questionDtos,
                questionIdPage.getNumber(),
                questionIdPage.getSize(),
                questionIdPage.getTotalPages(),
                questionIdPage.getTotalElements()
        );
    }

    @Transactional(readOnly = true)
    public PaginatedResponseDto<QuestionResponseDto> readQuestionHistory(LocalDate from,
                                                                         LocalDate to,
                                                                         Pageable pageable) {
        // TODO: 인증된 회원 ID를 받아와야 한다.
        int createdBy = 1;

        // from, to 기본값 설정
        from = Optional.ofNullable(from).orElse(LocalDate.of(2023, 1, 1));
        to = Optional.ofNullable(to).orElse(LocalDate.now());

        // 회원의 문의 ID 목록 조회
        Page<Long> questionIdPage = questionRepository.findIdByCreatedByAndDateBetween(createdBy, from, to, pageable);

        // 문의 ID 목록에 따른 문의 목록 조회
        List<Question> questions = questionRepository.findAllById(questionIdPage.getContent(), pageable.getSort());

        // 문의 목록에 있는 상품 정보를 한 번에 조회
        Set<Integer> productIds = questions.stream().map(Question::getProductId).collect(Collectors.toSet());
        Map<Integer, ProductResponseDto> productDtoMap = productService.getVerifiedProducts(productIds)
                .stream().collect(Collectors.toMap(ProductResponseDto::getId, Function.identity()));

        // DTO 매핑 후 반환
        List<QuestionResponseDto> questionDtos = questions.stream()
                .map(question -> questionToDto(question, productDtoMap.get(question.getProductId())))
                .collect(Collectors.toList());

        return new PaginatedResponseDto<>(
                questionDtos,
                questionIdPage.getNumber(),
                questionIdPage.getSize(),
                questionIdPage.getTotalPages(),
                questionIdPage.getTotalElements()
        );
    }

    public QuestionResponseDto updateQuestion(long questionId, QuestionPatchDto questionPatchDto) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 답변이 있는 경우 수정 불가
        Optional.ofNullable(question.getAnswer()).ifPresent(answer -> {
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_UPDATE);
        });

        // 문의 내용 변경
        question.setBody(questionPatchDto.getBody());

        // DB에 문의 수정 사항 적용
        questionRepository.flush();

        // DTO 매핑 후 반환
        return questionToDto(question, null);
    }

    public void deleteQuestion(long questionId) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 답변이 있는 경우 삭제 불가
        Optional.ofNullable(question.getAnswer()).ifPresent(answer -> {
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_DELETE);
        });

        // 문의 삭제 처리
        question.setDeleted(true);
    }

    public QuestionResponseDto createAnswer(long questionId, AnswerRequestDto answerRequestDto) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 답변이 있는 경우 답변 불가
        Optional.ofNullable(question.getAnswer()).ifPresent(answer -> {
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_ANSWER);
        });

        // Answer 엔티티 생성 및 Question 엔티티에 저장
        question.setAnswer(new Answer(question, answerRequestDto.getBody()));

        // DB에 답변 추가 적용
        questionRepository.flush();

        // DTO 매핑 후 반환
        return questionToDto(question, null);
    }

    public QuestionResponseDto updateAnswer(long questionId, AnswerRequestDto answerRequestDto) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 답변이 없는 경우 예외 발생
        Optional.ofNullable(question.getAnswer())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_ANSWER_NOT_FOUND));

        // 답변 수정
        question.getAnswer().setBody(answerRequestDto.getBody());

        // DB에 답변 수정 적용
        questionRepository.flush();

        // DTO 매핑 후 반환
        return questionToDto(question, null);
    }

    @Transactional(readOnly = true)
    private QuestionResponseDto questionToDto(Question question, ProductResponseDto productDto) {
        Optional<ProductResponseDto> optionalProductDto = Optional.ofNullable(productDto);
        String productName = optionalProductDto.map(ProductResponseDto::getName).orElse(null);
        String imageUrl = optionalProductDto.map(ProductResponseDto::getImageUrls)
                .map(urls -> urls.isEmpty() ? null : urls.get(0)).orElse(null);
        AnswerResponseDto answerDto = Optional.ofNullable(question.getAnswer())
                .map(answer -> new AnswerResponseDto(
                        answer.getBody(),
                        answer.getCreatedBy(),
                        answer.getModifiedBy(),
                        answer.getCreatedAt(),
                        answer.getModifiedAt()
                )).orElse(null);

        return new QuestionResponseDto(
                question.getId(),
                question.getProductId(),
                productName,
                imageUrl,
                question.getBody(),
                answerDto,
                question.getCreatedBy(),
                question.getModifiedBy(),
                question.getCreatedAt(),
                question.getModifiedAt()
        );
    }

}
