import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import * as firestore from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8AwIj1faB4YnAWManM8Wb7pX3xRaNCGw",
  authDomain: "shift-fa32d.firebaseapp.com",
  projectId: "shift-fa32d",
  storageBucket: "shift-fa32d.appspot.com",
  messagingSenderId: "946424005930",
  appId: "1:946424005930:web:f269800b4466f9d80d0a53",
  measurementId: "G-W25ZMQ4T4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
window.db = firestore.getFirestore(app);
window.firestore = firestore;

window.CENTARIUS_GAME_ID = "329690a7-3737-490e-9ab2-61d89070df35";
window.getOrCreateUserId = function () {
  let userId = localStorage.getItem("userId");
  // new user?
  if (!userId) {
    userId = generateUniqueId();
    // save userId to local storage
    localStorage.setItem("userId", userId);
    // register new user
    $.ajax({
      type: "POST",
      url: "https://www.centarius.app/reg-user/",
      data: {
        game_id: window.CENTARIUS_GAME_ID,
        userID: userId,
      },
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log("Error: ", error);
      },
    });
  }
  return userId;
};
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(5);
  const uniqueId = timestamp + "-" + randomString;
  return uniqueId;
}
