function del() {

    var inputs = document.querySelectorAll('form input')

    for (var i = 0; i < inputs.length; i++) {

        inputs[i].removeAttribute("disabled")
    }
}

function inputss() {

}


// GOOGLE FIREBASE DATABASE


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
//----------------------------------------make-----//
var fname, NID, addres, emai, phne, gen, cntry, bldtype, fname1, addres1,
    emai1, phne1, gen1, cntry1, bldtype1, numsofsubjects1, clas1, section1, semsyear1,
    fathname, fathjob, grade, totaldeg, numsofsubjects, clas, section, semsyear, NIDteacher

function ready() {
    fname = document.getElementById("fullname").value
    NID = document.getElementById("nationalid").value


    addres = document.getElementById("address").value
    emai = document.getElementById("email").value
    phne = document.getElementById("mobilephone").value
    cntry = document.getElementById("countryname").value
    bldtype = document.getElementById("Blood-Type").value
    fathname = document.getElementById("fathername").value
    fathjob = document.getElementById("fatherjob").value
    grade = document.getElementById("grade").value
    totaldeg = document.getElementById("degree").value
    numsofsubjects = document.getElementById("numbersofsubject").value
    clas = document.getElementById("class").value
    section = document.getElementById("section").value
    semsyear = document.getElementById("semester").value
    //------------------teacher----------------------//
    fname1 = document.getElementById("fullname1").value
    NIDteacher = document.getElementById("national-id").value
    addres1 = document.getElementById("address1").value
    emai1 = document.getElementById("email1").value
    phne1 = document.getElementById("mobilephone1").value
    cntry1 = document.getElementById("countryname1").value
    bldtype1 = document.getElementById("Blood-Type1").value
    numsofsubjects1 = document.getElementById("numbersofsubject1").value
    clas1 = document.getElementById("class1").value
    section1 = document.getElementById("section1").value
    semsyear1 = document.getElementById("semester1").value


}
// ------- insert Student ------- //
document.getElementById("insert1").onclick = function () {
    ready();

    firebase.database().ref("StudentData/" + NID).set({
        FullName: fname,
        NationalID: NID,
        Address: addres,
        Email: emai,
        Phone: phne,
        Gender: document.querySelector("input[type='radio']:checked").value,
        Country: cntry,
        BloodType: bldtype,
        FatherName: fathname,
        FatherJob: fathjob,
        Grade: grade,
        TotalDegree: totaldeg,
        NumbersOfSubjects: numsofsubjects,
        Class: clas,
        Section: section,
        SemesterYear: semsyear,


    })

    var inputts = document.querySelectorAll('form input')
    for (var i = 0; i < inputts.length; i++) {

        inputts[i].setAttribute("disabled", "true")
    }
};
//-----------------insert teacher---------------------------//
document.getElementById("insert").onclick = function () {
    ready();

    firebase.database().ref("TeacherData/" + NIDteacher).set({
        FullName: fname1,
        NationalID: NIDteacher,
        Address: addres1,
        Email: emai1,
        Phone: phne1,
        Gender1: document.querySelector("input[type='radio']:checked").value,
        Country: cntry1,
        BloodType: bldtype1,
        NumbersOfSubjects: numsofsubjects1,
        Class: clas1,
        Section: section1,
        SemesterYear: semsyear1


    })

    var inputts = document.querySelectorAll('form input')
    for (var i = 0; i < inputts.length; i++) {

        inputts[i].setAttribute("disabled", "true")
    }
};


//------------------UPDATE---------------//
document.getElementById("update1").onclick = function () {
    ready();

    firebase.database().ref("StudentData/" + NID).update({
        FullName: fname,
        Address: addres,
        Email: emai,
        Phone: phne,
        Gender: document.querySelector("input[type='radio']:checked").value,
        Country: cntry,
        BloodType: bldtype,
        FatherName: fathname,
        FatherJob: fathjob,
        Grade: grade,
        TotalDegree: totaldeg,
        NumbersOfSubjects: numsofsubjects,
        Class: clas,
        Section: section,
        SemesterYear: semsyear
    })
}
    //------------------------------- Update Student----------------//
    document.getElementById("update").onclick = function () {
        ready();

        firebase.database().ref("TeacherData/" + NIDteacher).set({
            FullName: fname1,
            NationalID: NIDteacher,
            Address: addres1,
            Email: emai1,
            Phone: phne1,
            Gender1: document.querySelector(".ge[type='radio']:checked").value,
            Country: cntry1,
            BloodType: bldtype1,
            NumbersOfSubjects: numsofsubjects1,
            Class: clas1,
            Section: section1,
            SemesterYear: semsyear1,


        })
    }


 

// ------------------------------- Select student----------------//
document.getElementById("select1").onclick = function () {
    ready();

    firebase.database().ref("StudentData/" + NID).on("value", function (snapshot) {
        document.getElementById("fullname").value = snapshot.val().FullName;
        document.getElementById("address").value = snapshot.val().Address;
        document.getElementById("email").value = snapshot.val().Email;
        document.getElementById("mobilephone").value = snapshot.val().Phone;
        document.querySelector(`input[value=${snapshot.val().Gender}]`).checked = true
        document.getElementById("countryname").value = snapshot.val().Country;
        document.getElementById("Blood-Type").value = snapshot.val().BloodType;
        document.getElementById("fathername").value = snapshot.val().FatherName;
        document.getElementById("fatherjob").value = snapshot.val().FatherJob;

        document.getElementById("grade").value = snapshot.val().Grade;

        document.getElementById("degree").value = snapshot.val().TotalDegree;

        document.getElementById("numbersofsubject").value = snapshot.val().NumbersOfSubjects;

        document.getElementById("class").value = snapshot.val().Class;
        document.getElementById("section").value = snapshot.val().Section;
        document.getElementById("semester").value = snapshot.val().SemesterYear;
    })
}



//------------------------------- teacher------------- //


document.getElementById("select").onclick = function () {
    ready();

    firebase.database().ref("TeacherData/" + NIDteacher).on("value", function (snapshot) {
        document.getElementById("fullname1").value = snapshot.val().FullName;
        document.getElementById("address1").value = snapshot.val().Address;
        document.getElementById("email1").value = snapshot.val().Email;
        document.getElementById("mobilephone1").value = snapshot.val().Phone;
        document.querySelector(`.ge[value=${snapshot.val().Gender1}]`).checked = true
        document.getElementById("countryname1").value = snapshot.val().Country;
        document.getElementById("Blood-Type1").value = snapshot.val().BloodType;



        document.getElementById("numbersofsubject1").value = snapshot.val().NumbersOfSubjects;

        document.getElementById("class1").value = snapshot.val().Class;
        document.getElementById("section1").value = snapshot.val().Section;
        document.getElementById("semester1").value = snapshot.val().SemesterYear;



    });
}
function logout() {
   firebase.auth().signOut();}

   function gotest(){
       window.location.replace("/MakerPage.html")
   }