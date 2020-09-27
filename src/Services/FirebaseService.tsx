import firebase from 'firebase'


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

 const messaging = firebase.messaging()

 export const initNotification = () => {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
          messaging.getToken().then((currentToken: any) => {
            if (currentToken) {
                
                console.log(currentToken)
          
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
          
            }
          }).catch((err: any) => {
            console.log('An error occurred while retrieving token. ', err);
 
          });

        }

})
}