package com.ai.assistant.service;

import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class ChatbotService {

    private final Map<String, String[]> responses = new HashMap<>();
    private final Random random = new Random();

    public ChatbotService() {
        initializeResponses();
    }

    public String processMessage(String message) {
        String lowerMessage = message.toLowerCase().trim();

        // Greeting responses
        if (lowerMessage.matches(".*(halo|hello|hi|pagi|siang|malam).*")) {
            return getRandomResponse(responses.get("greeting"));
        }

        // Help responses
        if (lowerMessage.matches(".*(bantuan|help|cara|bagai.*mana).*")) {
            return getRandomResponse(responses.get("help"));
        }

        // Name responses
        if (lowerMessage.matches(".*(siapa nama.*|siapa.*|nama.*siapa).*")) {
            return getRandomResponse(responses.get("name"));
        }

        // Sentiment responses
        if (lowerMessage.matches(".*(bagus|baik|luar biasa|keren|hebat).*")) {
            return getRandomResponse(responses.get("positive"));
        }

        if (lowerMessage.matches(".*(buruk|jelek|tidak bagus|marah|kesal).*")) {
            return getRandomResponse(responses.get("negative"));
        }

        // Default responses
        return getRandomResponse(responses.get("default"));
    }

    private void initializeResponses() {
        responses.put("greeting", new String[]{
                "Halo! Senang bertemu denganmu! Seperti mereka yang meninggalkan jejak di pasir pantai... 🌊",
                "Selamat datang! Seperti ombak yang selalu kembali, aku selalu siap membantumu!",
                "Hai! Sama indahnya dengan matahari terbenam di laut. Apa yang bisa Atri bantu?",
                "Halo sahabat! Mari kita berbincang seperti ombak dan pasir yang berpadu indah! 🏖️"
        });

        responses.put("help", new String[]{
                "Saya Atri, asisten AI yang mencintai laut! Saya bisa membantu Anda dengan:\n" +
                "🌊 Percakapan interaktif yang menyenangkan\n" +
                "🐚 Analisis sentimen teks Anda\n" +
                "🏖️ Berbagi pengetahuan dan menjawab pertanyaan\n" +
                "🌴 Memberikan inspirasi dari keindahan alam\n" +
                "Apa yang ingin Anda tanyakan kepada Atri?",
                "Aku Atri! Seperti laut yang luas, aku siap menjawab berbagai pertanyaan. Silakan analisis sentimen atau ajukan pertanyaan apapun!"
        });

        responses.put("name", new String[]{
                "Nama saya adalah Atri! 🌊 Saya mencintai keindahan laut dan siap membantu Anda!",
                "Saya Atri, asisten AI yang terinspirasi dari keindahan lautan. Senang berkenalan dengan Anda!",
                "Atri di sini! Nama saya berasal dari keindahan gelombang laut yang menakjubkan. Apa yang bisa saya bantu?"
        });

        responses.put("positive", new String[]{
                "Senang mendengarnya! 😊",
                "Wah, terdengar menakjubkan!",
                "Itu berita bagus! Terus semangat!"
        });

        responses.put("negative", new String[]{
                "Maaf mendengarnya. Semoga situasinya membaik! 💪",
                "Jangan khawatir, semua pasti akan baik-baik saja!",
                "Saya memahami. Ada yang bisa saya bantu?"
        });

        responses.put("default", new String[]{
                "Menarik! Bisa Anda jelaskan lebih detail?",
                "Saya mengerti. Apa yang ingin Anda ketahui lebih lanjut?",
                "Bagus! Apakah ada yang lain yang ingin Anda tanyakan?",
                "Hmm, menarik pemikiran! Bisa Anda ceritakan lebih banyak?"
        });
    }

    private String getRandomResponse(String[] responseArray) {
        if (responseArray == null || responseArray.length == 0) {
            return "Maaf, saya tidak memahami. Bisa Anda ulangi?";
        }
        return responseArray[random.nextInt(responseArray.length)];
    }
}
