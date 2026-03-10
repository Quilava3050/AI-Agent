package com.ai.assistant.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SentimentResponse {
    private String sentiment;
    private Double score;
    private String text;
    private Integer wordCount;
    private Integer positiveCount;
    private Integer negativeCount;
    private List<String> positiveKeywords;
    private List<String> negativeKeywords;
}
