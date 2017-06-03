(function(){
angular.module('app')
    .controller('mainCtrl', function(){
        var vn= this;
        vn.text="Shalom";

        vn.type = 'Browser Market Share';

        vn.initData = function () {
            vn.data = [
                ['Chrome', 47.0],
                ['Firefox', 33.0],
                ['IE', 20.0]
            ];
        }

        vn.utopia = function () {
            vn.data = [
                ['Chrome', 99.0],
                ['Firefox', 1.0],
                ['IE', 0.0]
            ];
        }

        vn.initData();
        

        
    });
})()