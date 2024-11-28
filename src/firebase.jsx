// Importa las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Importa la función de autenticación de Firebase

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8CCTsNqDTSVuBA6ACjHiPGHg_U-3BZkg",
  authDomain: "otvaleparking.firebaseapp.com",
  projectId: "otvaleparking",
  storageBucket: "otvaleparking.firebasestorage.app",
  messagingSenderId: "783468065396",
  appId: "1:783468065396:web:d0f976ed700e34f38d9721",
  measurementId: "G-JBQNFZMBZ0",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa Firebase Authentication
const auth = getAuth(app); // Se inicializa el servicio de autenticación

// Exporta Firebase y sus servicios inicializados
export { app, analytics, auth }; // Asegúrate de exportar 'auth'
