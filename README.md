# 🎬 Netflix Clone

Un'applicazione web clone di Netflix sviluppata con **React** e **Vite**, che utilizza **Firebase** per l'autenticazione degli utenti e **The Movie Database (TMDb)** per ottenere informazioni su film e serie TV.

---

## 🚀 Funzionalità

- 🔐 **Autenticazione con Firebase** (sign up, login, logout)
- 🎥 **Trailer e dettagli film** grazie all’API di [TMDb](https://www.themoviedb.org/)
- 🧭 Navigazione dinamica con **React Router**
- 💅 Interfaccia utente responsive simile a Netflix
- 🔎 Visualizzazione e selezione dei film
- 📺 Video player integrato (YouTube embed)
- ☁️ Gestione utente con Firestore (opzionale)

---

## 🧪 Tecnologie utilizzate

- ⚛️ **React** (con Vite)
- 🔥 **Firebase** (Authentication & Firestore)
- 🌐 **TMDb API**
- 🛠️ **React Router DOM**
- 🎨 **CSS / Tailwind / custom styling**
- 📦 **React Toastify** per notifiche

---

## 🔧 Configurazione ambiente

### 1. Clona il repository

```bash
git clone https://github.com/tuo-username/netflix-clone.git
cd netflix-clone
2. Installa le dipendenze
bash
Copia
Modifica
npm install
3. Configura le variabili ambiente
Crea un file .env nella root del progetto e aggiungi le seguenti variabili:

env
Copia
Modifica
# TMDb
VITE_TMDB_BEARER_TOKEN=IL_TUO_TOKEN_TMDB
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3

# Firebase
VITE_FIREBASE_API_KEY=LA_TUA_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
4. Avvia l'app in locale
bash
Copia
Modifica
npm run dev
```

📁 Struttura del progetto
bash
Copia
Modifica
src/
├── assets/              # Icone, immagini
├── components/          # Componenti riutilizzabili
├── pages/               # Pagine principali (Home, Login, Player)
├── firebase.js          # Configurazione Firebase
├── App.jsx              # Componente principale
├── main.jsx             # Entry point
📸 Screenshot


🛡️ Note sulla sicurezza
Le chiavi API sono lette da .env ma non sono completamente nascoste nel frontend. Per maggiore sicurezza, si consiglia di usare un backend/proxy per le chiamate alle API TMDb se il progetto andrà in produzione.

📚 Risorse utili
Firebase Authentication

TMDb API Documentation

React Router

Vite

📜 Licenza
Questo progetto è a scopo didattico e non è affiliato ufficialmente con Netflix.
Puoi usarlo, modificarlo e distribuirlo liberamente.

🙌 Autore
Sviluppato da [abyssfra] – in continua evoluzione!
