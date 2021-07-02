

//----------------------------------------------------data------//
var fname, NID, addres, emai, phne, gen, cntry, bldtype, fname1, addres1,
    emai1, phne1, gen1, cntry1, bldtype1, numsofsubjects1, clas1, section1, semsyear1,
    fathname, fathjob, grade, totaldeg, numsofsubjects, clas, section, semsyear, NIDteacher

function ready() {
    fname = document.getElementById("fullname").value
    NID = document.getElementById("Nation-Id").value


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



}


  

 function Load () {
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
        document.getElementById("nationalid").value= snapshot.val().NationalID;
        document.getElementById("grade").value = snapshot.val().Grade;

        document.getElementById("degree").value = snapshot.val().TotalDegree;

        document.getElementById("numbersofsubject").value = snapshot.val().NumbersOfSubjects;

        document.getElementById("class").value = snapshot.val().Class;
        document.getElementById("section").value = snapshot.val().Section;
        document.getElementById("semester").value = snapshot.val().SemesterYear;
    });
}
function logout() {
   firebase.auth().signOut();
window.location.replace("/homepage.html")}




   function start(){
       window.location.replace("/TestPage.html")
   }