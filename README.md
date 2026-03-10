# 🌊 Atri - Asisten AI Pintar

Atri adalah platform full-stack dengan AI Chatbot cerdas dan tools analisis sentimen yang indah dan interaktif. Dibangun dengan **Spring Boot** backend dan **React** frontend.

## 🎯 Fitur Utama

- **💬 Chat Interaktif**: Percakapan dengan AI yang cerdas dan responsif
- **💭 Analisis Sentimen**: Analisis mendalam tentang sentimen teks
- **🌊 Tema Laut**: Interface yang indah terinspirasi dari keindahan lautan
- **📊 Statistik Lengkap**: Word count, keyword detection, dan sentiment scoring
- **💾 Download Chat**: Unduh riwayat percakapan dalam format teks

## 🛠️ Teknologi

### Backend
- **Java 17**
- **Spring Boot 3.2.0**
- **Maven** untuk dependency management
- **Lombok** untuk boilerplate code
- **H2 Database** untuk development

### Frontend
- **React 18.2.0**
- **Axios** untuk HTTP requests
- **React Icons** untuk vector icons
- **CSS3** dengan animasi dan gradient

## 📋 Persyaratan Sistem

- **Java 17** atau lebih baru
- **Node.js 16** atau lebih baru (dengan npm)
- **Maven 3.6** atau lebih baru
- **Git** (opsional)

## 🚀 Cara Menjalankan

### 1. Setup Backend (Spring Boot)

Buka terminal dan navigasi ke folder `backend`:

```bash
cd backend
```

Compile dan jalankan Spring Boot:

```bash
mvn clean install
mvn spring-boot:run
```

Backend akan berjalan di: **http://localhost:8080**

Cek health endpoint:
```bash
curl http://localhost:8080/api/chat/health
curl http://localhost:8080/api/sentiment/health
```

### 2. Setup Frontend (React)

Buka terminal baru dan navigasi ke folder `frontend`:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm start
```

Frontend akan berjalan di: **http://localhost:3000**

Browser akan otomatis membuka aplikasi.

## 📡 API Endpoints

### Chat API

**POST** `/api/chat/message`
```json
{
  "message": "Halo, siapa namamu?"
}
```
Response:
```json
{
  "response": "Nama saya adalah Atri! 🌊 Saya mencintai keindahan laut..."
}
```

**GET** `/api/chat/health`
Response: `Chatbot is running!`

### Sentiment Analysis API

**POST** `/api/sentiment/analyze`
```json
{
  "text": "Hari ini adalah hari yang sangat indah dan menyenangkan!"
}
```
Response:
```json
{
  "sentiment": "Positive",
  "score": 0.875,
  "text": "Hari ini adalah hari yang sangat indah dan menyenangkan!",
  "wordCount": 8,
  "positiveCount": 2,
  "negativeCount": 0,
  "positiveKeywords": ["indah", "menyenangkan"],
  "negativeKeywords": []
}
```

**GET** `/api/sentiment/health`
Response: `Sentiment Analysis service is running!`

## 🎨 Struktur Project

```
AI BIKIN AI/
├── backend/
│   ├── src/main/java/com/ai/assistant/
│   │   ├── controller/
│   │   │   ├── ChatbotController.java
│   │   │   └── SentimentAnalysisController.java
│   │   ├── service/
│   │   │   ├── ChatbotService.java
│   │   │   └── SentimentAnalysisService.java
│   │   ├── dto/
│   │   │   ├── ChatRequest.java
│   │   │   ├── ChatResponse.java
│   │   │   ├── SentimentRequest.java
│   │   │   └── SentimentResponse.java
│   │   └── AiAssistantApplication.java
│   ├── resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatInterface.js
│   │   │   └── SentimentAnalyzer.js
│   │   ├── styles/
│   │   │   ├── ChatInterface.css
│   │   │   └── SentimentAnalyzer.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

## 🔧 Konfigurasi

### Backend Configuration (`backend/src/main/resources/application.properties`)

```properties
spring.application.name=ai-assistant-backend
server.port=8080

# Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa

# JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true

# Logging
logging.level.root=INFO
logging.level.com.ai.assistant=DEBUG
```

## 📝 Contoh Penggunaan

### Chat dengan Atri

1. Buka aplikasi di browser
2. Klik tab "💬 Chat dengan Atri"
3. Ketik pesan Anda di input field
4. Tekan "Kirim" atau Enter
5. Tunggu respons dari Atri

Contoh pertanyaan:
- "Halo, siapa nama mu?"
- "Apa kabar?"
- "Bantu aku"
- "Kamu sukai apa?"

### Analisis Sentimen

1. Klik tab "💭 Analisis Sentimen"
2. Ketik atau paste teks yang ingin dianalisis
3. Klik "Analisis Sentimen"
4. Lihat hasil analisis dengan detail statistik dan keywords

Contoh teks:
- "Hari ini adalah hari yang sangat indah dan menyenangkan!"
- "Saya sangat kesal dengan situasi ini"
- "Menurut saya, produk ini cukup baik"

## 🐛 Troubleshooting

### Backend tidak berjalan

```bash
# Pastikan Java 17 atau lebih baru
java -version

# Bersihkan dan rebuild
cd backend
mvn clean install

# Jalankan lagi
mvn spring-boot:run
```

### Frontend tidak bisa connect ke Backend

1. Pastikan backend sedang berjalan di `http://localhost:8080`
2. Lihat browser console untuk error messages
3. Cek CORS configuration di `application.properties`

### Port sudah digunakan

Jika port 8080 atau 3000 sudah digunakan, ubah di:
- Backend: `application.properties` → `server.port=8081`
- Frontend: `package.json` → `PORT=3001 npm start`

## 📦 Build untuk Production

### Backend

```bash
cd backend
mvn clean package
# JAR akan tersedia di: backend/target/ai-assistant-backend-1.0.0.jar
java -jar target/ai-assistant-backend-1.0.0.jar
```

### Frontend

```bash
cd frontend
npm run build
# Build akan tersedia di: frontend/build/
```

## 🌐 Deployment

### Deploy Backend ke Cloud
Backend bisa dideploy ke:
- Heroku
- AWS Elastic Beanstalk
- Google Cloud Run
- Azure App Service

### Deploy Frontend ke Cloud
Frontend bisa dideploy ke:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Kontribusi

Silakan fork repositori ini dan submit pull request untuk perbaikan atau fitur baru!

## 📄 Lisensi

Project ini dibuat untuk pembelajaran dan pengembangan AI.

## 👩‍💻 Tentang Atri

**Atri** adalah asisten AI yang mencintai keindahan laut. Dengan desain yang terinspirasi dari gelombang laut dan warna-warna ocean, Atri menawarkan pengalaman AI yang tidak hanya cerdas tapi juga indah secara visual.

---

**✨ Dibuat dengan 💙 untuk AI lovers everywhere** 🌊

Seindah ombak yang terus bergerak, kami terus berinovasi untuk memberikan pengalaman terbaik!
