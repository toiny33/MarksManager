# 📚 Marks Manager

A simple Android application for recording, saving, and calculating Internal Assessment (IA) marks semester-wise.

## ✨ Features

- 📚 Select a semester and manage its marks
- 📝 Record marks for multiple subjects
- 📊 Add marks for IA1, IA2, and IA3
- 💾 Save marks locally using browser local storage
- 🧮 Automatically calculate:
  - Total marks
  - Percentage for each IA
  - Average marks for each subject across the three IAs
- 🔄 View saved marks whenever the app is reopened
- ❌ Delete individual subjects
- 📱 Android-friendly interface
- ⬅️ Navigate between pages using the device back gesture/button

## 🛠️ Technologies Used

- **Kotlin** – Android application
- **HTML** – Page structure and UI
- **CSS** – Styling and layout
- **JavaScript** – Calculations, navigation, and data handling
- **WebView** – Loads the HTML/CSS/JavaScript interface inside the Android application
- **LocalStorage** – Stores marks locally on the device

## 📂 Project Structure

```text
MarksManager/
│
├── app/
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/example/marksmanager/
│           │       └── MainActivity.kt
│           │
│           ├── res/
│           │   └── layout/
│           │       └── activity_main.xml
│           │
│           └── assets/
│               ├── index.html
│               ├── Years.html
│               ├── Sem.html
│               ├── Sem1.html
│               ├── Sem2.html
│               ├── Sem3.html
│               ├── Marks.html
│               ├── marks.js
│               └── style.css
│
└── README.md
