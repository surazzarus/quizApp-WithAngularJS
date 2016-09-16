(function(){

    angular
        .module("ProgrammingFacts")
        .controller("QuizController", ['quizMetrics','dataService', function(quizMetrics, dataService){
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.setActiveQuestion = setActiveQuestion;

            vm.activeQuestion = 0;
            vm.error = false;
            vm.finalise = false;

            function setActiveQuestion(index){
                if(index === undefined){
                    var breakOut = false;
                    var quizLength = dataService.quizQuestions.length - 1;

                    // while breakOut is still equal to 'false'
                    while(!breakOut){
                        // if activeQuestion is less then quizLength, increment activeQuestion otherwise go to '0'
                        vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;

                            // if activeQuestion equals to first index display message for user
                            if(vm.activeQuestion === 0){
                                vm.error = true;
                            }

                        // if currently active question hasn't yet been selected i.e. found unanswered question
                        if(dataService.quizQuestions[vm.activeQuestion].selected === null){
                            breakOut = true;
                        }
                    }
                }
                else{
                    vm.activeQuestion = index;
                }

            }

            var numQuestionAnswered = 0;

            vm.questionAnswered = function(){

                var quizLength = dataService.quizQuestions.length;

                // if selected flag is no longer null i.e. question is answered
                if(dataService.quizQuestions[vm.activeQuestion].selected !== null){
                    numQuestionAnswered++;

                    // if all question has been answered
                    if(numQuestionAnswered >= quizLength){
                        // finalise quiz
                        // check if all the questions have been answered
                        for(var i = 0; i < quizLength; i++){
                            if(dataService.quizQuestions[i].selected === null){
                                // if previous questions selected 'i' is null, set the 'setActiveQuestion' fn with the current index
                                setActiveQuestion(i);
                                return;
                            }
                        }

                        // if all the questions have been answered
                        vm.error = false;
                        vm.finalise = true;
                        return;
                    }
                }

                // if current question hasn't been selected or has been selected but not all of them
                vm.setActiveQuestion();
            };

            vm.selectAnswer = function(index){
                dataService.quizQuestions[vm.activeQuestion].selected = index;
            };

            vm.finaliseAnswers = function(){
                // resetting everything
                vm.finalise = false;
                numQuestionAnswered = 0;
                vm.activeQuestion = 0;

                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz", false);
                quizMetrics.changeState("results", true);
            };

        }]);

})();