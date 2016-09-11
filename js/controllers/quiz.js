(function(){

    angular
        .module("ProgrammingFacts")
        .controller("QuizController",['quizMetrics','dataService', function(quizMetrics, dataService){
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.activeQuestion = 0;
            vm.questionAnswered = function(){

            };
        }]);

})();