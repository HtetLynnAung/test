var myapp = angular.module("myApp",[]);

myapp.controller("myController",function($scope,$window){
  $scope.items=[{title:'Item1',image:'img1.jpg',price:'10000'},
                {title:'Item2',image:'img1.jpg',price:'10000'},
                {title:'Item3',image:'img1.jpg',price:'10000'},
                {title:'Item4',image:'img1.jpg',price:'10000'},
                {title:'Item5',image:'img1.jpg',price:'10000'},
                {title:'Item6',image:'img1.jpg',price:'10000'}]
  $scope.count=0;
$scope.buy=function(){
  $scope.count = $scope.count+1;
}
});
