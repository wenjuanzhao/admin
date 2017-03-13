angular.module('app').controller('ContactCtrl',['$scope','$http','$filter',function ($scope,$http,$filter) {
    $http.get('./js/app/contact/contacts.json').then(function (resp) {
        $scope.items=resp.data.items;
        $scope.item=$filter('orderBy')($scope.items,'first')[0];
        $scope.item.selected=true;
    })
    $scope.groups = [
        {name: 'Coworkers'},
        {name: 'Family'},
        {name: 'Friends'},
        {name: 'Partners'},
        {name: 'Group'}
    ];
   $scope.createGroup=function () {
       var group={name:'New Group'};

       $scope.groups.push(group)
   }
   $scope.editItem=function (item) {
       if(item&&item.selected){
           item.editing=true;
       }
   }
   $scope.slectGroup=function (item) {
        angular.forEach($scope.groups,function (item) {
            item.selected=false
        })
       $scope.group=item;
        $scope.filter=item.name;
        $scope.group.selected=true;
   }
   $scope.selectItem=function (item) {
       angular.forEach($scope.items,function (item) {
           item.selected=false;
           item.editing=false;
       })
       $scope.item=item;
       $scope.item.selected=true;
   }
   $scope.deleteGroup=function (item) {
       $scope.groups.splice($scope.groups.indexOf(item),1)
   }
   $scope.doneItem=function (item) {
       item.editing=false;
   }
   $scope.createItem=function () {
       var item={
           group:'Friends',
           avatar:'img/a0.jpg'
       }
       $scope.items.push(item);
       $scope.selectItem(item);
       $scope.item.editing=true;
   }
}])