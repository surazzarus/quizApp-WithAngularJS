(function(){

    angular
        .module("ProgrammingFacts")
        .factory("quizMetrics", ['dataService', function(dataService){
            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState,
                correctAnswers: [],
                markQuiz: markQuiz,
                numCorrect: 0
            };

            return quizObj;

            function changeState(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                }
                else if(metric === "results"){
                    quizObj.resultsActive = state;
                }
                else{
                    return false;
                }
            }

            function markQuiz(){
                quizObj.correctAnswers = dataService.correctAnswers;
                // compare correct answers with the user's answer
                for(var i = 0; i < dataService.quizQuestions.length; i++){
                    // if it is true, mark 'correct' flag to true and increment 'numCorrect'
                    if(dataService.quizQuestions[i].selected === dataService.correctAnswers[i]){
                        dataService.quizQuestions[i].correct = true;
                        quizObj.numCorrect++;
                    }
                    else{
                        // else mark 'correct' flag to false
                        dataService.quizQuestions[i].correct = false;
                    }
                }
            }
        }]);

})();