package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.question.dto.AnswerRequestDto;
import com.codestates.seb41_main_034.question.dto.QuestionPatchDto;
import com.codestates.seb41_main_034.question.dto.QuestionPostDto;
import com.codestates.seb41_main_034.question.dto.QuestionResponseDto;
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

import javax.validation.Valid;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Positive;
import java.time.LocalDate;

@AllArgsConstructor
@RestController
@Validated
@RequestMapping("/api/v1")
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping("/question")
    public ResponseEntity<QuestionResponseDto> postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
        return new ResponseEntity<>(questionService.createQuestion(questionPostDto), HttpStatus.CREATED);
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<QuestionResponseDto> getQuestion(@Positive @PathVariable long questionId) {
        return new ResponseEntity<>(questionService.readQuestion(questionId), HttpStatus.OK);
    }

    @GetMapping("/product/{productId}/question")
    public ResponseEntity<PaginatedResponseDto<QuestionResponseDto>> getProductQuestions(
            @Positive @PathVariable int productId,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        return new ResponseEntity<>(questionService.readProductQuestions(productId, pageable), HttpStatus.OK);
    }

    @GetMapping("/question/question-history")
    public ResponseEntity<PaginatedResponseDto<QuestionResponseDto>> getQuestionHistory(
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate from,
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate to,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        return new ResponseEntity<>(questionService.readQuestionHistory(from, to, pageable), HttpStatus.OK);
    }

    @PatchMapping("/question/{questionId}")
    public ResponseEntity<QuestionResponseDto> patchQuestion(@Positive @PathVariable long questionId,
                                                             @Valid @RequestBody QuestionPatchDto questionPatchDto) {
        return new ResponseEntity<>(questionService.updateQuestion(questionId, questionPatchDto), HttpStatus.OK);
    }

    @DeleteMapping("/question/{questionId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteQuestion(@Positive @PathVariable long questionId) {
        questionService.deleteQuestion(questionId);
    }

    @PostMapping("/question/{questionId}/answer")
    public ResponseEntity<QuestionResponseDto> postAnswer(@Positive @PathVariable long questionId,
                                                          @Valid @RequestBody AnswerRequestDto answerRequestDto) {
        return new ResponseEntity<>(questionService.createAnswer(questionId, answerRequestDto), HttpStatus.OK);
    }

    @PatchMapping("/question/{questionId}/answer")
    public ResponseEntity<QuestionResponseDto> patchAnswer(@Positive @PathVariable long questionId,
                                                           @Valid @RequestBody AnswerRequestDto answerRequestDto) {
        return new ResponseEntity<>(questionService.updateAnswer(questionId, answerRequestDto), HttpStatus.OK);
    }

}
