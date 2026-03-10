package com.ai.assistant.service;

import com.ai.assistant.dto.SentimentResponse;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class SentimentAnalysisService {

    private static final Map<String, Integer> positiveWords = new HashMap<>();
    private static final Map<String, Integer> negativeWords = new HashMap<>();

    static {
        // Positive words
        positiveWords.put("bagus", 3);
        positiveWords.put("baik", 3);
        positiveWords.put("sempurna", 3);
        positiveWords.put("hebat", 3);
        positiveWords.put("luar biasa", 3);
        positiveWords.put("keren", 2);
        positiveWords.put("suka", 2);
        positiveWords.put("cinta", 3);
        positiveWords.put("indah", 2);
        positiveWords.put("menyenangkan", 2);
        positiveWords.put("positif", 2);
        positiveWords.put("excellent", 3);
        positiveWords.put("great", 3);
        positiveWords.put("awesome", 3);
        positiveWords.put("love", 3);
        positiveWords.put("good", 2);
        positiveWords.put("happy", 2);
        positiveWords.put("wonderful", 3);

        // Negative words
        negativeWords.put("buruk", 3);
        negativeWords.put("jelek", 3);
        negativeWords.put("mengerikan", 3);
        negativeWords.put("horor", 3);
        negativeWords.put("marah", 2);
        negativeWords.put("kesal", 2);
        negativeWords.put("sedih", 2);
        negativeWords.put("muak", 2);
        negativeWords.put("benci", 3);
        negativeWords.put("tidak bagus", 2);
        negativeWords.put("jahat", 3);
        negativeWords.put("negatif", 2);
        negativeWords.put("terrible", 3);
        negativeWords.put("bad", 2);
        negativeWords.put("hate", 3);
        negativeWords.put("awful", 3);
        negativeWords.put("horrible", 3);
        negativeWords.put("sad", 2);
    }

    public SentimentResponse analyzeSentiment(String text) {
        String lowerText = text.toLowerCase();
        
        int positiveScore = 0;
        int negativeScore = 0;
        List<String> positiveKeywordsList = new ArrayList<>();
        List<String> negativeKeywordsList = new ArrayList<>();

        // Count positive words and collect keywords
        for (Map.Entry<String, Integer> entry : positiveWords.entrySet()) {
            if (lowerText.contains(entry.getKey())) {
                positiveScore += entry.getValue();
                positiveKeywordsList.add(entry.getKey());
            }
        }

        // Count negative words and collect keywords
        for (Map.Entry<String, Integer> entry : negativeWords.entrySet()) {
            if (lowerText.contains(entry.getKey())) {
                negativeScore += entry.getValue();
                negativeKeywordsList.add(entry.getKey());
            }
        }

        // Determine sentiment
        String sentiment;
        double confidence;

        if (positiveScore > negativeScore) {
            sentiment = "Positive";
            confidence = calculateConfidence(positiveScore, positiveScore + negativeScore);
        } else if (negativeScore > positiveScore) {
            sentiment = "Negative";
            confidence = calculateConfidence(negativeScore, positiveScore + negativeScore);
        } else {
            sentiment = "Neutral";
            confidence = 0.5;
        }

        // Count words
        String[] words = text.split("\\s+");
        int wordCount = words.length;

        SentimentResponse response = new SentimentResponse();
        response.setSentiment(sentiment);
        response.setScore(confidence);
        response.setText(text);
        response.setWordCount(wordCount);
        response.setPositiveCount(positiveKeywordsList.size());
        response.setNegativeCount(negativeKeywordsList.size());
        response.setPositiveKeywords(positiveKeywordsList);
        response.setNegativeKeywords(negativeKeywordsList);

        return response;
    }

    private double calculateConfidence(int majorScore, int totalScore) {
        if (totalScore == 0) {
            return 0.5; // Neutral confidence
        }
        double rawConfidence = (double) majorScore / totalScore;
        // Ensure confidence is between 0.5 and 1.0
        return Math.max(0.5, Math.min(1.0, rawConfidence));
    }
}
