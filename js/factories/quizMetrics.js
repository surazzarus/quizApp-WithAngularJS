(function(){

    angular
        .module("ProgrammingFacts")
        .factory("quizMetrics", function(){
            var quizObj = {
                quizActive: false,
                changeState: function(state){
                    quizObj.quizActive = state;
                }
            };

            return quizObj;
        });

})();