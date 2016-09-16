(function(){

    angular
        .module("PeopleFacts")
        .controller("ListController",['$http','quizMetrics','dataService', function($http, quizMetrics, dataService){
           var vm = this;

           vm.peoples = dataService.peopleData;

           activePeople = {};
           vm.changeActivePeople = function(people){
                vm.activePeople = people;
           };

           vm.quizMetrics = quizMetrics;

           vm.activateQuiz = function(){
              quizMetrics.changeState("quiz", true);
           };
        }]);

})();