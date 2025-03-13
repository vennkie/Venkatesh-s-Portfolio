import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCbTdtT0OTz5vXxiDCc0D-kZf1g6POPal8",
  authDomain: "venkatesh-s-portfolio.firebaseapp.com",
  projectId: "venkatesh-s-portfolio",
  storageBucket: "venkatesh-s-portfolio.firebasestorage.app",
  messagingSenderId: "68202197493",
  appId: "1:68202197493:web:b10795914e2f05600db0bc",
  measurementId: "G-WYEJ8VJ22D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);