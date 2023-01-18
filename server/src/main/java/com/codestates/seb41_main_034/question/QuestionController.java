package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.question.dto.QuestionPostDto;
import com.codestates.seb41_main_034.question.dto.QuestionResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@AllArgsConstructor
@RestController
@Validated
@RequestMapping("/api/v1")
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping("/question")
    ResponseEntity<QuestionResponseDto> postQuestion(@Valid QuestionPostDto questionPostDto) {
        return new ResponseEntity<>(questionService.createQuestion(questionPostDto), HttpStatus.CREATED);
    }

    @GetMapping("/question/{questionId}")
    ResponseEntity<QuestionResponseDto> getQuestion(@Positive @PathVariable long questionId) {
        return new ResponseEntity<>(questionService.readQuestion(questionId), HttpStatus.OK);
    }

}
