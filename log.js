var firebaseConfig = {
   apiKey: "AIzaSyBOlJf2ml8t2FE4ot3qMbazuoOnGqFNVoY",
   authDomain: "quiz-maker-83cb2.firebaseapp.com",
   databaseURL: "https://quiz-maker-83cb2-default-rtdb.firebaseio.com",
   projectId: "quiz-maker-83cb2",
   storageBucket: "quiz-maker-83cb2.appspot.com",
   messagingSenderId: "810135281246",
   appId: "1:810135281246:web:2ec430338417d9e4c59ecf",
   measurementId: "G-6F5TB8PVFG"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

//----------------------------- LOGIN-------------------------------//
firebase.auth().onAuthStateChanged(function (user) {
   if (user) {
      // User is signed in.


      document.getElementById("studentlog").style.display = "none";
      document.getElementById("teacherlog").style.display = "none";
      document.getElementById("loginteacher").style.display="none";
      document.getElementById("loginstudent").style.display="none"
      document.getElementById("logout").style.display="";

      var user = firebase.auth().currentUser;

      if (user != null) {

         var email_id = user.email;
         alert("welcome User " + email_id);

      }

   } else {
      // No user is signed in.


      document.getElementById("studentlog").style.display = "";
      document.getElementById("teacherlog").style.display = "";
      document.getElementById("logout").style.display="none";


   }
});

function loginst() {

   var useremail = document.getElementById("emailstudent").value;
   var userpass = document.getElementById("passstudent").value;

   firebase.auth().signInWithEmailAndPassword(useremail, userpass) .catch(function (error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;

         window.alert("Error : " + errorMessage);

         // ...
      });

}

function logout() {
   firebase.auth().signOut();
}

function loginte() {

   var userEmail = document.getElementById("emailteacher").value;
   var userPass = document.getElementById("passteacher").value;

   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      
   });

}

function logout() {
   firebase.auth().signOut();
}
