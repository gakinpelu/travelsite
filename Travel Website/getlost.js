





alert("Welcome to the Quiz!");

var answer1 = prompt("Who Founded Mexico City?");
var score = 0;

if (answer1.toLowerCase() == "cortez") { 
    score ++;
    alert("You are correct, Your score is:" + score)
}
 else {alert("Sorry, you es stupido!")}

alert("Next Question...");

var answer2 = prompt("What two continents does Istanbul straddle?");


if (answer2.toLowerCase() == "asia")  { 
    score ++;
    alert("You are correct, Your score is:" + score)
}
 else {alert("Sorry, I don't know how to say 'incorrect' in Turkish!")}

alert("Next Question...");


var answer3 = prompt("Paris is home to what tall structure made out of steel?");

if (answer3.toLowerCase() == "eifel tower")  { 
    score ++;
    alert("C'est bon! You are correct, Your score is:" + score)
}
 else {alert("Sorry, Tu es dumb")}

alert("Those are all the questions-hold for your results.");


if (score > 0) {
    alert("You have a total of " + score + " questions correct!")
}
else {alert("Dang-were you not paying attention at ALL??!!")}




     


/******************************************************

Step 1: create an array that contains the questions and answers



var questions = [
    ["What two continents does Istanbule straddle?", "Europe and Asia"],
    ["Mexico City was built on top of what Aztec city", "Tenochtitlan"],
    ["Paris is home to what famous steel structure that was built for the 1889 World's Fair?", "Eifel Tower"],
    ["What does Prague have that is the oldest surviving of its kind in Europe?", "synogogue"]
];






var correctAnswers = 0;
var question;
var answer;
var response;
var html;

var message = prompt


for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions [i][0];
    response = toLowerCase.(prompt(question));
    if (response === answer){
        correctAnswers += 1;
    }


html="you got" + correctAnswers + "question(s) right.";
print(html);


******************************************************/
