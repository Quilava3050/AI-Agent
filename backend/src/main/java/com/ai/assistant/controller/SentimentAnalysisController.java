package com.ai.assistant.controller;

import com.ai.assistant.dto.SentimentRequest;
import com.ai.assistant.dto.SentimentResponse;
import com.ai.assistant.service.SentimentAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sentiment")
@CrossOrigin(origins = "http://localhost:3000")
public class SentimentAnalysisController {

    @Autowired
    private SentimentAnalysisService sentimentAnalysisService;

    @PostMapping("/analyze")
    public ResponseEntity<SentimentResponse> analyzeSentiment(@RequestBody SentimentRequest request) {
        SentimentResponse response = sentimentAnalysisService.analyzeSentiment(request.getText());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Sentiment Analysis service is running!");
    }
}
