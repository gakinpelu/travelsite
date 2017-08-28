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





for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions [i][0];
    response = toLowerCase.(prompt(question));
    if (response === answer){
        correctAnswers += 1;
    }
}


