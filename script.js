//---------firebase config---------------//
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

//-------------------------------POP UP Login Student and Teacher Function---------------------------------//

let logstudentbtn = document.querySelector("#studentlog")
let loginstudentbtn = document.querySelector(".studentlogin")
let closestudentbtn = document.querySelector(".closestudent")

if (loginstudentbtn && closestudentbtn && logstudentbtn) {

   document.querySelector("#studentlog").addEventListener("click", function () {

      document.querySelector(".studentlogin").style.display = "flex";
   })
   document.querySelector(".closestudent").addEventListener("click", function () {

      document.querySelector(".studentlogin").style.display = "none";
   })

   document.querySelector("#teacherlog").addEventListener("click", function () {

      document.querySelector(".teacherlogin").style.display = "flex";
   })
   document.querySelector(".closeteacher").addEventListener("click", function () {

      document.querySelector(".teacherlogin").style.display = "none";
   })
}
//----------------------------------------------------------------------//

//------------------------REGISTRY---------------------------------------------//
var fname, emai, cntry, NIDteacher, Lname, typest, typete, NID, pw, log

function Ready(form) {
   NID = document.getElementById(`.${form} Nation-Id`).value
   fname = document.getElementById(`.${form} fullname`).value
   NIDteacher = document.getElementById(`.${form} Nation-Id`).value
   pw = document.getElementById(`.${form} password`).value

   emai = document.getElementById(`.${form} email`).value
   cntry = document.getElementById(`.${form} countryname`).value
   typest = document.getElementById(`.${form} st`).value
   typete = document.getElementById(`.${form} te`).value

}

var signupform = document.querySelector(".form2")

// NID = document.getElementById("Nation-Id").value

if (signupform) {
   signupform.addEventListener("submit", (e) => {
      e.preventDefault()


      NID = signupform.querySelector("#Nation-Id").value
      fname = signupform.querySelector("#fullname").value
      NIDteacher = signupform.querySelector("#Nation-Id").value
      pw = signupform.querySelector("#password").value
      emai = signupform.querySelector("#email").value
      cntry = signupform.querySelector("#countryname").value
      typest = signupform.querySelector("#st")
      typete = signupform.querySelector("#te")

      console.log(typest.checked, typete.checked)
      firebase.auth().createUserWithEmailAndPassword(emai.trim(), pw).then(cred => {
         
      })
      
      console.log('sg')
         if (typest.checked) {
            console.log('sg32')
            firebase.database().ref("StudentData/" + NID).on("value", function (snapshot) {

               firebase.database().ref("StudentData/" + NID).set({
                  FullName: fname,
                  NationalID: NID,
                  Password: pw,
                  Email: emai,
                  Gender: signupform.querySelector("input[type='radio']:checked").value,
                  Country: cntry,
                  State: typest.value

               })
            })
         } else if (typete.checked) {
            console.log('sg')
            firebase.database().ref("TeacherData/" + NIDteacher).on("value", function (snapshot) {
               console.log('er')
               firebase.database().ref("TeacherData/" + NIDteacher).set({
                  FullName: fname,
                  NationalID: NIDteacher,
                  Password: pw,
                  State: typete.value,
                  Email: emai,
                  Gender: signupform.querySelector("input[type='radio']:checked").value,
                  Country: cntry
               })
            })

         }

   })
}




function logout() {
   firebase.auth().signOut();
   window.location.replace("homepage.html")
}



//----------------------LOGIN-------------------------//



firebase.auth().onAuthStateChanged(function (user) {

   if (user) {

      var studentlogbtn, teacherlogbtn, logformteacher, logformstudent, logoutbtnall

      studentlogbtn = document.getElementById("studentlog")
      teacherlogbtn = document.getElementById("teacherlog")
      logformteacher = document.getElementById("loginteacher")
      logformstudent = document.getElementById("loginstudent")
      logoutbtnall = document.getElementById("logout")



      // User is signed in.

      


      var user = firebase.auth().currentUser;

      if (user != null) {
         //------ to Show Login buttons and hide logout button and the popup login ------------//
        document.querySelector('body').classList.add('logged')
         document.getElementById("logout").style.display = ""
         var email_id = user.email;

         console.log("welcome User " + email_id);
      }
   } else {
      {
         studentlogbtn,
         teacherlogbtn,
      
         logoutbtnall

         document.getElementById("studentlog").style.display = "",
         document.getElementById("teacherlog").style.display = "",
         document.getElementById("logout").style.display = "none"
      }


      console.log("No user is signed in")
   }
})


// No user is signed in.











function logout() {
   firebase.auth().signOut();
   window.location.replace("homepage.html")
   document.getElementById("logout").style.display = "none"
}
var ca, cb, cc, stat, cd, ca1, cb1, cc1, cd1, stat1

//-------------------- Login Button For Student-----------------//
function loginst() {


   //------------------------------//
   pw = document.getElementById("password").value
   emai = document.getElementById("email").value


   firebase.auth().signInWithEmailAndPassword(emai,pw).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage + errorCode);

   })
   firebase.database().ref('StudentData/'+ + document.getElementById("Nation-Id").value).on("value", function (snapshot) {
      console.log(snapshot.val());
      ca = snapshot.val().FullName;
      cb = snapshot.val().Email;
      cc = snapshot.val().Password;
      cd = snapshot.val().Country;
      stat = snapshot.val().State;


      if (stat === "student") {
         location.replace("studentpage.html");
      } else if(stat==="teacher") {

         console.log("login Failed")
      }

   })


}


function logout() {
   firebase.auth().signOut();
   window.location.replace("/homepage.html")
   document.getElementById("logout").style.display = "none"

}


function loginte(form) {

pw = document.querySelector(`.${form} #password`).value
   emai =document.querySelector(`.${form} #email`).value
 

   firebase.auth().signInWithEmailAndPassword(emai,pw).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage+errorCode);
   })
   firebase.database().ref('TeacherData/' + document.querySelector(`.${form} #nation-id`).value).on('value', function (snapshot) {

      console.log(snapshot.val().State);
      ca1 = snapshot.val().FullName;
      cb1 = snapshot.val().Email;
      cc1 = snapshot.val().Password;
      cd1 = snapshot.val().Country;
      stat1 = snapshot.val().State;
console.log(snapshot.val().State)

      if (stat1 === "teacher") {
         location.replace("teacherpage.html");
      } else {
         console.log("login Failed")
      }

   })


}

function logout() {

   firebase.auth().signOut();
   window.location.replace("homepage.html")
   document.getElementById("logout").style.display = "none"
}