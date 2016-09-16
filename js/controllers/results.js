(function(){

    angular
        .module('PeopleFacts')
        .controller('ResultsController',['quizMetrics','dataService', function(quizMetrics, dataService){
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.activeQuestion = 0;

            vm.getAnswerClass = function(index){
                if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                    return "bg-success";
                }
                else if(index === dataService.quizQuestions[vm.activeQuestion].selected){
                    return "bg-danger";
                }
            };

            vm.setActiveQuestion = function(index){
                vm.activeQuestion = index;
            };

            vm.calculatePerc = function(){
                return quizMetrics.numCorrect / dataService.quizQuestions.length * 100;
            };

            vm.reset = function(){
                quizMetrics.changeState("results", false);
                quizMetrics.numCorrect = 0;

                for(var i = 0; i < dataService.quizQuestions.length; i++){
                    var data = dataService.quizQuestions[i];

                    data.selected = null;
                    data.correct = null;
                }
            }
        }]);

})();