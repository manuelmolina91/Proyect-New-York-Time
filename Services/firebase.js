// Importe las funciones que necesita de los SDK que necesita.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

// TODO: agregar SDK para los productos de Firebase que desea usar.
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuración de Firebase de tu aplicación web.
const firebaseConfig = {
  apiKey: "AIzaSyCyoZbt00LYBGwWhzqMp6NYzuuG8WQ_hWY",
  authDomain: "proyect-new-york-time-firebase.firebaseapp.com",
  projectId: "proyect-new-york-time-firebase",
  storageBucket: "proyect-new-york-time-firebase.appspot.com",
  messagingSenderId: "854473197201",
  appId: "1:854473197201:web:a04a1f322067928db56130"
};

// Inicializar Firebase.
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)