
var questions = [["Eritrea, which became the 182nd member of the UN in 1993, is in the continent of ?"
    , "Asia", "Africa", "Europe", "Australia", "Africa"]
    ,
["Entomology is the science that studies ?", "Behavior of human beings ",
    "Insects", "The origin and history of technical and scientific terms",
    "The formation of rocks", "Insects"],
["Grand Central Terminal ?, Park Avenue, New York is the world's", "largest railway station"
    , "highest railway station"
    , "longest railway station",
    "None of the above", "largest railway station"]
    ,
[
    "For which of the following disciplines is Nobel Prize awarded ?",
    "Physics and Chemistry",
    "Physiology or Medicine",
    "Literature, Peace and Economics",
    "All of the above",
    "All of the above"
]
    ,
[
    "Hitler party which came into power in 1933 is known as ?",
    "Labour Party",
    "Nazi Party",
    "Ku-Klux-Klan",
    "Democratic Party",
    "Nazi Party"
]
    ,
[
    "FFC stands for ?",
    "Foreign Finance Corporation",
    "Film Finance Corporation",
    "Federation of Football Council",
    "None of the above",
    "Film Finance Corporation"
]
    ,
[
    "Golf player Vijay Singh belongs to which country ?",
    "USA",
    "Fiji",
    "India",
    "UK",
    "Fiji"
],
["First Afghan War took place in ?",
    "1839",
    "1843",
    "1833",
    "1848",
    "1839"]
    ,
["First China War was fought between ?",
    "China and Britain",
    "China and France",
    "China and Egypt",
    "China and Greek",
    "China and Britain"]
    ,
["Gravity setting chambers are used in industries to remove ?",
    "SOx",
    "NOx",
    "suspended particulate matter",
    "CO",
    "suspended particulate matter"]

];
var initialQuestionIndex = 0;
var counter, UserAnswers = [], attempError = display('error'),
    quizTest = display('questionSection'),
    quizAnswer = display('answerSection'),
    nextButton = display('nextbtn'),
    startButton = display('startquiz');
titledetail = display('title'),
    score = 0, corrected = 0, quizLength = (questions.length),
    now = new Date(), displayWatch = display('timer'), minute = 0, Second = 0;
var linkid;
var currentlogin;
var initializeQuiz = new Quiz(questions);
display('userErroremail').style.display = 'none';
display('userSignError').style.display = 'none';
display('userErrorpassword').style.display = 'none';
display('quizstarter').style.display = 'none';
//userSignError

function StartQuiz() {
    display('intro').style.display = 'none';
    display('quizstarter').style.display = 'block';
    load();

}

function load() {

    QuestionClick(initialQuestionIndex);
    MainTimer();
}
//Timer

function MainTimer() {
    if (counter != "05:00") {
        Second++;
        if (Second >= 60) {
            Second = 0;
            minute++;
        }


        displayWatch.innerHTML = "<h3 >" + (minute ? (minute > 9) ? minute : '0' + minute : '00')
            + ":" + (Second ? (Second > 9) ? Second : '0' + Second : "00") + "</h3>";
        counter = displayWatch.innerText;

        if (minute == 5 && Second == 0) {

            initialQuestionIndex = quizLength;
            QuestionClick(initialQuestionIndex);

            quizAnswer.innerHTML += "<div class='alert alert-danger' role='alert'>Sorry, Time is up!</div>"
            //counter=undefined;

            //displayWatch.innerHTML="00:00";
            Second = 0;
            minute = 0;

        }
        counter = displayWatch.innerText;

        if (counter != "05:00")
            Starttimer();
    }
}

function Starttimer() {
    setTimeout(MainTimer, 1000)
}



//Quiz Constructor Fucntion
function Quiz(question = []) {
    this.question = question;
    // this.questionsOption=questionsOption
}



//generic function for getting value from field
function display(controlId) {

    return document.getElementById(controlId);
}


function QuestionClick(initialQuestionIndex) {

    quizAnswer.innerHTML = "";
    quizTest.innerHTML = "";

    // /&& counter !="20:00"  && checked!=true
    if (initialQuestionIndex < quizLength) {

        titledetail.innerHTML = " <h3>Question : " + (initialQuestionIndex + 1) + " to " + (quizLength) + " </h3>";
        quizTest.innerHTML = "<div class='row'> <h3 class='col-md-12 col-sm-12 col-xs-12  questionStyle' style='width:140%;   id='question_" + initialQuestionIndex + "'>" + (initialQuestionIndex + 1) + " )   " + initializeQuiz.question[initialQuestionIndex][0] + "</h3></div>";
        // document.write("<div class='col-md-12'>"+initializeQuiz.question[i]+"</div>");
        for (var j = 1; j < 5; j++) {
            quizAnswer.innerHTML += "<h5 class='col-md-12 col-lg-12 col-xs-12 col-sm-12 radioBtn' ><label class='col-md-12 col-lg-12 col-xs-12 col-sm-12 radioBtn'><input type='radio'  id='" + initialQuestionIndex + "'  name='ra' value='" + initializeQuiz.question[initialQuestionIndex][j] + "' />" + initializeQuiz.question[initialQuestionIndex][j] + "</label></h5>";
        }
        nextbtn.innerHTML = "<button type='submit' class='btn btn-primary col-md-12 col-lg-12 col-sm-12 col-xs-12' id='btnNext' onClick='ValidateRadios()'>NEXT</button>";


    } else {
        if (score >= 25) {

            displayWatch.innerHTML = "05:00";
            minute = 0;
            Second = 0;
            counter = "05:00";
            if (counter != "05:00")
                Starttimer();
            display('nextbtn').setAttribute("class", "");
            display('nextbtn').style.display = 'none';
            quizAnswer.innerHTML += "<div class='jumbotron alert alert-success'><h4 >You have Passed!</h4><p class='lead'>You have Corrected : <b>" + corrected + "</b>  <br/> your Score is <b>" + score + "</b> out of : <b>" + quizLength * 5 + "</b> </p><hr class='my-4'>"
        } else {
            debugger;
            displayWatch.innerHTML = "05:00";
            counter = "05:00";
            minute = 0;
            Second = 0;
            if (counter != "05:00")
                Starttimer();
            display('nextbtn').style.display = 'none';
            quizAnswer.innerHTML += "<div class='jumbotron alert alert-danger'><h4>You have failed!</h4><p class='lead'>You have Corrected : <b>" + corrected + "</b>  <br/> your Score is <b>" + score + "</b> out of : <b>" + quizLength * 5 + "<b/> </p><hr class='my-4'>"
        }
    }
}

function ValidateRadios() {

    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
            break;
        }
    } ('ra');

    displayWatch.innerHTML = counter;
    if (value != undefined && value != "") {
        attempError.style.display = "none";
        UserAnswers.push(value);
        // debugger;
        // console.log(initializeQuiz.question[initialQuestionIndex][5]);
        if (value == initializeQuiz.question[initialQuestionIndex][5]) {

            score = score + 5;
            corrected++;
        }
        initialQuestionIndex++;
        QuestionClick(initialQuestionIndex);
    }
    else {
        attempError.style.display = "block";
        attempError.innerHTML = "Please choose the atleast one answer!";
        attempError.style.color = "red";
        QuestionClick(initialQuestionIndex);
    }

}


function RequestClick(id) {

    var value = id.id;
    if (value == "loginID") {

        linkid = 1;
    } else if (value == "signupID") {
        linkid = 2;
    }
    return linkid;
}


function Validate(userEmail, userPassword) {

    if (linkid == 2) {

        userEmail = display('userEmailsign').value;
        userPassword = display('userPasswordsign').value;
        var nameInput = display("userName").value;
        if (ValidateEmail(userEmail) == true && ValidatePassword(userPassword) == true) {

            signup(userEmail, userPassword, nameInput);


        }
        else {

            display('userSignError').style.display = 'block';
        }
    }


    if (linkid == 1) {

        userEmail = display('userEmail').value;
        userPassword = display('userPassword').value;
        if (ValidateEmail(userEmail) == true && ValidatePassword(userPassword) == true) {

            login(userEmail, userPassword);
            display('userPassword').value = '';
            display('userEmail').value = '';
        }
        else {
            if (ValidateEmail(userEmail) == true) {


                display('userEmail').style.background = "green";
            }
            if (ValidatePassword(userPassword) == true) {

                display('userPassword').style.background = "green";
            }

        }
    }




}
function ValidatePassword(pass) {
    if (pass != undefined && pass.length > 6) {
        return true;
    }
    if (linkid != 2)
        display('userErrorpassword').style.display = 'block';
    return false;
}

function ValidateEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email != '' && filter.test(email)) {


        return true;
    }

    display('userPassword').style.display = 'block';
    return false;
}




//for firebase Login


// var emailInput=display('userEmail')
//  var passwordInput=display('userPassword');
//var nameInput=display("userName");
var database = firebase.database();
var auth = firebase.auth();

function signup(email, pass, name) {

    // var email=emailInput.value;
    // var pass=passwordInput.value;
    //builtin function createUserWithEmailAndPassword <= it is a promise
    auth.createUserWithEmailAndPassword(email, pass)
        .then(function (user) {
            // console.log(user);
            //for display name inside firbase user object we have to set by updating through updateprofile method
            return user.updateProfile({
                displayName: name
            })
                .then(function () {
                    location = 'quiz.html';
                })
        })

        .catch(function (error) {

            alert(error.message);

        })
}

function login(email, pass) {

    auth.signInWithEmailAndPassword(email, pass)
        .then(function (user) {
            // console.log(user);
            display('loginID').style.display = 'none';
            display('signupID').style.display = 'none';
            currentlogin = auth.currentUser.displayName;
            display('loginname').textContent = "Welcome : " + currentlogin;
            display('loginname').style.color = "white";
            display('loginname').style.fontSize = "1rem";
            ;
            if (currentlogin != null) {

                startButton.innerHTML = "<button type='submit' class='btn btn-info col-offset-6 text-center' id='btnNext' onClick='StartQuiz()'>Start Quiz</button>";
            }
            // location='Quiz.html';
        })
        .catch(function (error) {
            alert(error);
        })

}
//auth.currentuser it gives the current user 
