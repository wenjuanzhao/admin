app.controller("CustomTabController",["$scope",function ($scope) {
    $scope.tabs=[true,false,false]
    $scope.tab=function (n) {
        angular.forEach($scope.tabs,function (i,v) {
            $scope.tabs[v]=false;
        })
        $scope.tabs[n]=true;
    }
}])