<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-auth.js"></script>

let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);

