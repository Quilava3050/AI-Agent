package com.ai.assistant.controller;

import com.ai.assistant.dto.ChatRequest;
import com.ai.assistant.dto.ChatResponse;
import com.ai.assistant.service.ChatbotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatbotController {

    @Autowired
    private ChatbotService chatbotService;

    @PostMapping("/message")
    public ResponseEntity<ChatResponse> sendMessage(@RequestBody ChatRequest request) {
        String response = chatbotService.processMessage(request.getMessage());
        ChatResponse chatResponse = new ChatResponse(response);
        return ResponseEntity.ok(chatResponse);
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Chatbot is running!");
    }
}
