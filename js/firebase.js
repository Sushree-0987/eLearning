// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyDBanYFQqnaOsEj0_rEciyWbQfBMNV973U",
  authDomain: "elearning-762a9.firebaseapp.com",
  projectId: "elearning-762a9",
  storageBucket: "elearning-762a9.firebasestorage.app",
  messagingSenderId: "536942290150",
  appId: "1:536942290150:web:62e49c8da1a44b543c4727",
  measurementId: "G-GH8FQG68L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#google-login-button").addEventListener("click", function () {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info
                const user = result.user;
                alert(`Welcome ${user.displayName}`);
                // Redirect to another page or update UI
            })
            .catch((error) => {
                // Handle errors
                const errorMessage = error.message;
                document.getElementById("error-message").textContent = `Error: ${errorMessage}`;
            });
    });
});
