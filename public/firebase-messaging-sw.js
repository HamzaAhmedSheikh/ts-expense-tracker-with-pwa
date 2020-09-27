importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCIGGBUXYLaPwJ4706B81mHZ-UIBc5H-eI",
    authDomain: "expense-tracker-5111a.firebaseapp.com",
    databaseURL: "https://expense-tracker-5111a.firebaseio.com",
    projectId: "expense-tracker-5111a",
    storageBucket: "expense-tracker-5111a.appspot.com",
    messagingSenderId: "638886585527",
    appId: "1:638886585527:web:3d46177c5a5883ddc51932",
    measurementId: "G-Q4NN126SJG"
 };

 firebase.initializeApp(firebaseConfig);
 
 firebase.messaging();