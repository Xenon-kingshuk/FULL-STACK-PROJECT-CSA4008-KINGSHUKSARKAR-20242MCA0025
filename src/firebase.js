// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbEP_BB7F2VkZpWDoF_b-hahaMDnyD9i8",
  authDomain: "vibes-a10a3.firebaseapp.com",
  projectId: "vibes-a10a3",
  storageBucket: "vibes-a10a3.appspot.com", // 🔧 fixed `.app` to `.appspot.com`
  messagingSenderId: "272422154160",
  appId: "1:272422154160:web:6a3053c228495eba643075",
  measurementId: "G-1XSTQNQNYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // ✅ Add this line to export auth

export default app;
