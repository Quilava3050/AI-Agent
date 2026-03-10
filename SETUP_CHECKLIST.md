# ✅ Atri AI Platform - Setup Checklist

## 📋 Pre-requisites Installation

Sebelum menjalankan Atri, pastikan Anda sudah install:

### 1. Java Development Kit (JDK) 17+
- [ ] **Download**: https://www.oracle.com/java/technologies/downloads/
- [ ] **Install**: Ikuti installer wizard
- [ ] **Verify**: Buka terminal dan ketik: `java -version`
- [ ] **Harus muncul**: `java version "17.x.x"` atau lebih baru

### 2. Maven 3.6+
- [ ] **Download**: https://maven.apache.org/download.cgi
- [ ] **Extract**: Ke folder, misal: `C:\tools\apache-maven-3.9.x`
- [ ] **Add to PATH**: Environment Variables > Path > Add maven bin folder
- [ ] **Verify**: Terminal > `mvn -version`
- [ ] **Harus muncul**: `Apache Maven 3.6+`

### 3. Node.js & npm (LTS)
- [ ] **Download**: https://nodejs.org (LTS version)
- [ ] **Install**: Ikuti installer, accept defaults
- [ ] **Verify**: Terminal > `node -v` dan `npm -v`
- [ ] **Harus muncul**: `v16.x.x` atau lebih baru

### 4. Git (Optional tapi recommended)
- [ ] **Download**: https://git-scm.com/download/win
- [ ] **Install**: Ikuti installer

---

## 🚀 Project Setup Status

### Backend (Spring Boot) ✅
- [x] Project structure created
- [x] Maven pom.xml configured
- [x] Spring Boot application class
- [x] Controllers (ChatBot & Sentiment)
- [x] Services (ChatBot & Sentiment)
- [x] DTOs (Request & Response)
- [x] Application properties
- [x] CORS configured
- [x] H2 Database ready
- [x] Lombok annotations

### Frontend (React) ✅
- [x] React project initialized
- [x] Package.json with dependencies
- [x] Main App.js component
- [x] ChatInterface component
- [x] SentimentAnalyzer component
- [x] App.css styling (Ocean theme)
- [x] ChatInterface.css styling
- [x] SentimentAnalyzer.css styling
- [x] index.css global styles
- [x] Axios for API calls
- [x] React Icons integration
- [x] Responsive design

### Documentation ✅
- [x] README.md (Complete)
- [x] QUICK_START.md (Complete)
- [x] Setup Checklist (This file)
- [x] Startup script (START_ATRI.bat)

---

## 🎯 First Run Checklist

Sebelum menjalankan project:

### Prerequisites Check ✅
```bash
java -version          # Should be 17+
mvn -version          # Should be 3.6+
npm -v                # Should be 6+
node -v               # Should be 14+
```

### Backend Check
- [ ] Navigate to `/backend`
- [ ] Run: `mvn clean install`
- [ ] Wait for build to complete
- [ ] Should see: `BUILD SUCCESS`

### Frontend Check
- [ ] Navigate to `/frontend`
- [ ] Run: `npm install`
- [ ] Wait for dependencies to install
- [ ] Should see: `up to date`

### Port Availability ✅
- [ ] Port 8080 is free (Backend)
- [ ] Port 3000 is free (Frontend)
- [ ] Check: `netstat -ano | findstr :8080`

---

## 🔥 Running Atri

### Method 1: Automated (Recommended for Windows)
```bash
# Double-click START_ATRI.bat
# Wait for both servers to start
# Browser will open automatically
```

### Method 2: Manual in Separate Terminals

**Terminal 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
# Wait for: "Tomcat started on port(s): 8080"
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Wait for: "Compiled successfully!"
# Browser opens to http://localhost:3000
```

---

## ✅ Verification Checklist

### Backend Running ✅
- [ ] Health check: `curl http://localhost:8080/api/chat/health`
- [ ] Should return: `Chatbot is running!`
- [ ] Sentiment health: `curl http://localhost:8080/api/sentiment/health`
- [ ] Should return: `Sentiment Analysis service is running!`

### Frontend Running ✅
- [ ] Open: `http://localhost:3000`
- [ ] Should see: Atri logo and Ocean theme
- [ ] Should see: "Chat dengan Atri" tab
- [ ] Should see: "Analisis Sentimen" tab

### Chat Test ✅
- [ ] Click "Chat dengan Atri" tab
- [ ] Type: "Halo"
- [ ] Should get response from Atri
- [ ] Response should mention name "Atri"

### Sentiment Test ✅
- [ ] Click "Analisis Sentimen" tab
- [ ] Type: "Hari ini sangat bagus dan menyenangkan"
- [ ] Click analyze
- [ ] Should show: "Positive" sentiment
- [ ] Should show: Keywords detected

---

## 🐛 Troubleshooting

### Issue: Maven command not found
```bash
# Solution: Add Maven to PATH
# 1. Find maven installation folder
# 2. Add \bin to Windows PATH
# 3. Restart terminal
# 4. Try: mvn -v
```

### Issue: Java version error
```bash
# Solution: Check Java version
java -version
# If not 17+, install latest JDK
# https://www.oracle.com/java/technologies/downloads/
```

### Issue: npm install fails
```bash
# Solution: Clear npm cache
npm cache clean --force
npm install
```

### Issue: Port already in use
```bash
# Find what's using the port
netstat -ano | findstr :8080

# Kill process (replace PID)
taskkill /PID <PID> /F

# Or change port in application.properties
```

### Issue: CORS error
```bash
# Make sure backend is running
# Check backend logs for errors
# Verify CORS configuration in ChatbotController
```

---

## 📊 Project Statistics

| Component | Files | LOC | Status |
|-----------|-------|-----|--------|
| Backend Java | 6 | ~1000 | ✅ Complete |
| Frontend React | 5 | ~1500 | ✅ Complete |
| Stylesheets | 4 | ~1500 | ✅ Complete |
| Config Files | 3 | ~100 | ✅ Complete |
| Documentation | 4 | ~800 | ✅ Complete |
| **TOTAL** | **22** | **~5400** | **✅ READY** |

---

## 🎓 Learning Resources

### Backend
- Spring Boot Docs: https://spring.io/projects/spring-boot
- Maven Guide: https://maven.apache.org/guides/
- Java 17 Features: https://www.oracle.com/java/

### Frontend
- React Docs: https://react.dev/
- CSS Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
- Axios Docs: https://axios-http.com/

### AI/ML
- Sentiment Analysis: https://monkeylearn.com/sentiment-analysis/
- NLP Basics: https://www.coursera.org/

---

## 🚀 Next Steps After Setup

1. **Explore Features**
   - Test chat with different messages
   - Test sentiment with various inputs
   - Try downloading chat history

2. **Customize**
   - Edit chatbot responses
   - Add new sentiment keywords
   - Change color theme

3. **Deploy**
   - Build production JAR for backend
   - Build production build for frontend
   - Deploy to cloud platform

4. **Enhance**
   - Add database persistence
   - Integrate real NLP library
   - Add user authentication
   - Connect to external APIs

---

## 📞 Support & Debugging

### Check Logs
```bash
# Backend logs in terminal where mvn runs
# Frontend logs in terminal where npm runs
# Browser console: F12 > Console
```

### Debug Mode
```bash
# Backend: Edit application.properties
logging.level.com.ai.assistant=DEBUG

# Frontend: Check browser DevTools
# Network tab for API calls
# Console for JavaScript errors
```

### Performance Tips
```bash
# Clear node_modules cache
rm -rf frontend/node_modules
npm install

# Clear Maven cache
rm -rf ~/.m2/repository
mvn clean install
```

---

## ✨ Final Checklist

Before going live:
- [ ] All prerequisites installed
- [ ] Backend compiles without errors
- [ ] Frontend installs without errors
- [ ] Both servers start successfully
- [ ] Chat feature works
- [ ] Sentiment analysis works
- [ ] No console errors
- [ ] Responsive design works
- [ ] Downloaded chat history
- [ ] All UI elements display correctly

---

**🌊 Congratulations! Atri is ready to amaze you!**

```
888888 88 88b 88 8b  8    db    88
  88   88 88Yb88 8 Yb 8   dPYb   **
  88   88 88 Y88 8  YbdP  dP"Yb  **
  88   88 88  Y8 8   dP`  Yb dP  **
  88   88 88   8 8  dP"Yb  YbdP  **

= Asisten AI yang Mencintai Keindahan Laut =
```

**Status: ✅ READY FOR LAUNCH! 🚀**
