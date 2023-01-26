const firebaseConfig = {
    apiKey: "AIzaSyCYo7gqY3tezdXmfVbkypRd2eVZXPudPGc",
    authDomain: "ih12b213-4.firebaseapp.com",
    databaseURL: "https://ih12b213-4-default-rtdb.firebaseio.com",
    projectId: "ih12b213-4",
    storageBucket: "ih12b213-4.appspot.com",
    messagingSenderId: "988142203119",
    appId: "1:988142203119:web:4df2ef69aa5b5baa0e2b1a",
    measurementId: "G-JEE9VSE0DL"
};
firebase.initializeApp(firebaseConfig);    
    let downloadEle = document.createElement("a");
      downloadEle.href = canvas.toDataURL("image/png");
      downloadEle.download = "canvas.png";
      downloadEle.click();
