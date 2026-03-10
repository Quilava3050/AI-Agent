# 🚀 QUICK START GUIDE - Atri AI Platform

## ⚡ Cara Tercepat Menjalankan Atri

### Opsi 1: Automated Startup (Windows) - PALING MUDAH! ✨

1. **Double-click** file `START_ATRI.bat` di folder utama project
2. Tunggu hingga setup selesai (first time akan lebih lama karena install dependencies)
3. Browser akan terbuka otomatis ke **http://localhost:3000**
4. Selesai! 🎉

**Yang terjadi otomatis:**
- ✓ Backend Spring Boot dimulai di port 8080
- ✓ Frontend React dimulai di port 3000
- ✓ Browser membuka aplikasi secara otomatis

---

### Opsi 2: Manual Setup (Lebih Kontrol)

#### Step 1: Terminal 1 - Backend Setup

Buka Command Prompt / PowerShell dan ketik:

```bash
cd "c:\Users\ninjaexpres\Documents\baileys\AI BIKIN AI\backend"
mvn clean install
mvn spring-boot:run
```

**Tunggu hingga muncul:**
```
Spring Boot Application started successfully!
```

#### Step 2: Terminal 2 - Frontend Setup

Buka Command Prompt / PowerShell baru dan ketik:

```bash
cd "c:\Users\ninjaexpres\Documents\baileys\AI BIKIN AI\frontend"
npm install
npm start
```

**Browser akan membuka otomatis, atau buka:**
```
http://localhost:3000
```

---

## 🎯 Testing Atri

### 1. Test Chat Interface

Di tab "💬 Chat dengan Atri":

```
Anda: Halo siapa nama mu?
Atri: Nama saya adalah Atri! 🌊 Saya mencintai keindahan laut...
```

Coba pertanyaan lain:
- Siapa nama kamu?
- Apa yang bisa kamu bantu?
- Ada yang bisa aku tanyakan?

### 2. Test Sentiment Analysis

Di tab "💭 Analisis Sentimen":

**Input Positif:**
```
Hari ini adalah hari yang sangat indah dan menyenangkan!
```
Hasil: **Positive** sentimen dengan score tinggi ✅

**Input Negatif:**
```
Saya sangat marah dan kesal dengan situasi ini
```
Hasil: **Negative** sentimen ❌

**Input Netral:**
```
Hari ini adalah hari biasa saja
```
Hasil: **Neutral** sentimen ➖

---

## 📱 Fitur Utama

### Chat Interface Features
- 💬 Real-time chat dengan Atri
- 🌊 Beautiful ocean-themed design
- 📥 Auto-scroll ke pesan terbaru
- ⏰ Timestamp di setiap pesan
- 💾 Download chat history
- 🔄 Loading indicators

### Sentiment Analysis Features
- 📊 Analisis mendalam
- 🎯 Sentiment classification (Positive/Negative/Neutral)
- 📈 Score dan confidence level
- 🔍 Keyword extraction
- 📝 Word count statistics
- 💡 AI insights dari Atri

---

## 🔥 Troubleshooting

### ❌ Backend tidak berjalan

```bash
# Cek Java
java -version

# Harus Java 17 atau lebih baru!
# Download dari: https://www.oracle.com/java/technologies/downloads/
```

### ❌ Frontend tidak bisa connect ke Backend

```bash
# Check apakah backend berjalan
curl http://localhost:8080/api/chat/health

# Jika error, restart backend
```

### ❌ Port sudah terpakai

Ubah port di:

**Backend** → `backend/src/main/resources/application.properties`:
```properties
server.port=8081
```

**Frontend** → buka terminal dan ketik:
```bash
set PORT=3001 && npm start
```

### ❌ npm/maven command not found

Install:
- **Node.js** dari https://nodejs.org (includes npm)
- **Maven** dari https://maven.apache.org/download.cgi
- **Java 17** dari https://www.oracle.com/java/technologies/downloads/

---

## 📡 API Testing

### Test Backend API langsung

**Terminal** atau **Postman**:

```bash
# Test Chat API
curl -X POST http://localhost:8080/api/chat/message ^
  -H "Content-Type: application/json" ^
  -d "{\"message\":\"Halo\"}"

# Test Sentiment API
curl -X POST http://localhost:8080/api/sentiment/analyze ^
  -H "Content-Type: application/json" ^
  -d "{\"text\":\"Ini adalah hari yang indah dan menyenangkan\"}"
```

---

## 🎨 Customize Atri

### Ubah Responses Chatbot

File: `backend/src/main/java/com/ai/assistant/service/ChatbotService.java`

```java
responses.put("greeting", new String[]{
    "Custom greeting message 1",
    "Custom greeting message 2"
});
```

### Ubah Sentiment Words

File: `backend/src/main/java/com/ai/assistant/service/SentimentAnalysisService.java`

```java
positiveWords.put("custom-word", 3);  // score 3 = sangat positif
negativeWords.put("custom-word", 2);  // score 2 = sedikit negatif
```

### Ubah Theme/Colors

File: `frontend/src/App.css` dan `frontend/src/styles/*.css`

```css
:root {
  --primary-color: #0077be;
  --secondary-color: #00b4d8;
  --accent-color: #00f5ff;
}
```

---

## 📦 Build untuk Production

### Backend

```bash
cd backend
mvn clean package

# JAR siap di: backend/target/ai-assistant-backend-1.0.0.jar
java -jar target/ai-assistant-backend-1.0.0.jar
```

### Frontend

```bash
cd frontend
npm run build

# Build siap di: frontend/build/
# Upload ke hosting: Netlify, Vercel, GitHub Pages, dll
```

---

## 🌊 Tentang Atri

**Atri** adalah asisten AI yang:
- ✨ Mencintai keindahan laut dan alam
- 🧠 Cerdas dalam percakapan dan analisis
- 🎨 Punya desain yang indah dengan tema ocean
- 💙 Selalu siap membantu dan belajar

---

## 📞 Support

Jika ada masalah:
1. Check README.md untuk dokumentasi lengkap
2. Lihat console browser untuk error messages
3. Check terminal untuk backend errors
4. Verify semua dependencies sudah install

---

**🎉 Enjoy menggunakan Atri!**

Seindah ombak yang terus bergerak, Atri terus berinovasi untuk memberikan pengalaman terbaik! 🌊

```
   🌊
   ~~~
  (°o°)  Atri siap membantu!
   ~~~
   🌊
```
