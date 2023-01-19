package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.question.dto.AnswerRequestDto;
import com.codestates.seb41_main_034.question.dto.QuestionPatchDto;
import com.codestates.seb41_main_034.question.dto.QuestionPostDto;
import com.codestates.seb41_main_034.question.entity.Answer;
import com.codestates.seb41_main_034.question.entity.Question;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;

    public Question createQuestion(QuestionPostDto questionPostDto) {
        // 엔티티 객체 생성 및 데이터 입력
        Question question = new Question();
        question.setProductId(questionPostDto.getProductId());
        question.setBody(questionPostDto.getBody());

        // 엔티티 DB에 저장 및 반환
        return questionRepository.save(question);
    }

    @Transactional(readOnly = true)
    public Question readQuestion(long questionId) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        return questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public Page<Question> readProductQuestions(int productId, Pageable pageable) {
        // 상품에 해당하는 문의 ID 목록 조회
        Page<Long> questionIdPage = questionRepository.findIdByProductId(productId, pageable);

        // 문의 ID 목록에 따른 문의 목록 조회
        Map<Long, Question> questionMap = questionRepository.findAllById(questionIdPage.getContent()).stream()
                .collect(Collectors.toMap(Question::getId, Function.identity()));

        // 문의 Page로 변환 후 반환
        return questionIdPage.map(questionMap::get);
    }

    @Transactional(readOnly = true)
    public Page<Question> readQuestionHistory(
            int createdBy, LocalDate from, LocalDate to, Pageable pageable) {
        // 회원의 문의 ID 목록 조회
        Page<Long> questionIdPage = questionRepository.findIdByCreatedByAndDateBetween(createdBy, from, to, pageable);

        // 문의 ID 목록에 따른 문의 목록 조회
        Map<Long, Question> questionMap = questionRepository.findAllById(questionIdPage.getContent()).stream()
                .collect(Collectors.toMap(Question::getId, Function.identity()));

        // 문의 Page로 변환 후 반환
        return questionIdPage.map(questionMap::get);
    }

    public Question updateQuestion(long questionId, QuestionPatchDto questionPatchDto) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 답변이 있는 경우 수정 불가
        Optional.ofNullable(question.getAnswer()).ifPresent(answer -> {
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_UPDATE);
        });

        // 문의 내용 변경
        question.setBody(questionPatchDto.getBody());

        return question;
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

    public Question createAnswer(long questionId, AnswerRequestDto answerRequestDto) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 답변이 있는 경우 답변 불가
        Optional.ofNullable(question.getAnswer()).ifPresent(answer -> {
            throw new BusinessLogicException(ExceptionCode.QUESTION_CANNOT_ANSWER);
        });

        // Answer 엔티티 생성 및 Question 엔티티에 저장
        question.setAnswer(new Answer(question, answerRequestDto.getBody()));

        return question;
    }

    public Question updateAnswer(long questionId, AnswerRequestDto answerRequestDto) {
        // DB에서 문의 ID 조회, 없는 경우 예외 발생
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        // 답변이 없는 경우 예외 발생
        Optional.ofNullable(question.getAnswer())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_ANSWER_NOT_FOUND));

        // 답변 수정
        question.getAnswer().setBody(answerRequestDto.getBody());

        return question;
    }

}
