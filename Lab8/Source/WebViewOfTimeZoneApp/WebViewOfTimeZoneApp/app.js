/**
 * Created by malin on 19-10-2016.
 */

var app=angular.module("calculate",[]);
app.controller("calculatectrl",function ($scope,$http) {
    $scope.convert = function () {
        var Days=$scope.d;
        //var weight=$scope.w;

        var words = $http.get("http://localhost:8080/RESTExample/restexample/dtohservice/6");
        words.success(function (data) {
            console.log(data);
            $scope.cal={"Hours":data.Hours,"Days":data.Days,"Seconds":data.Seconds,"Minutes":data.Minutes};

        });
    }
});
