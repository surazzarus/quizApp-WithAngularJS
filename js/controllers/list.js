(function(){

    angular
        .module("ProgrammingFacts")
        .controller("ListController",['$http','quizMetrics','dataService', function($http, quizMetrics, dataService){
           var vm = this;

           vm.technologies = dataService.programmingData;

           activeTechnology = {};
           vm.changeActiveTechnology = function(technology){
                vm.activeTechnology = technology;
           };

           vm.quizMetrics = quizMetrics;

           vm.activateQuiz = function(){
              quizMetrics.changeState("quiz", true);
           };
        }]);

})();