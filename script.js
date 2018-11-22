var app= angular.module("Bingo",[]);
app.controller('BingoController',['$scope',function($scope){
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  function win(){
    for(var i=0;i<$scope.h;i++){
      var a=true;
      for(var j=0;j<$scope.w;j++){
        if($scope.go[i][j]==0){
          a=false;
          break;
        }
      }
      if(a){
      alert("BINGO!");
    }
    }
    for (var i=0;i<$scope.w;i++){
      var a=true;
      for(var j=0;j<$scope.h;j++){
        if($scope.go[j][i]==0){
          a=false;
          break;
        }
      }
      if(a){
      alert("BINGO!");
    }
    }
    if($scope.go[0][0]==1&&$scope.go[1][1]==1&&$scope.go[2][2]==1&&$scope.go[3][3]==1){
      alert("BINGO!");
    }
    if($scope.go[0][3]==1&&$scope.go[1][2]==1&&$scope.go[2][1]==1&&$scope.go[3][0]==1){
      alert("BINGO!");
    }
  }
  $scope.h=4;
  $scope.w=4;
  $scope.go=[];
  $scope.rows=[1,2,3,4];
  $scope.cols=[];
  $scope.total=1;
  for(var i=0;i<$scope.h;i++){
      var array=[];
      for(var j=0;j<$scope.w;j++){
        array.push(2);
      }
      $scope.go.push(array);
    }
    $scope.events=["Claire Grades", "Camielle Grades","NC State", "How Busy We Are","SAS Soccer Team","Thanksgiving in Michigan", "FOOTBALL", "Claire Internship", "Camielle Internship", "Claire Extracurriculars", "Camielle Extracurriculars", "Claire Housing", "Camielle Housing","Vacation", "New Dessert We Made", "The Turkey"];
    $scope.shuffled=shuffle($scope.events);
    for(var i=0;i<$scope.h;i++){
      for(var j=0;j<$scope.w;j++){
        $scope.go[i][j]=0;
      }
    }

$scope.click=function($event){
var pos=parseInt($event.target.id.split("Bingo")[1]);
var height=Math.floor(pos/$scope.h);
var width=Math.floor(pos%$scope.w);
  var el=$event.target;
  if($scope.go[height][width]==0){
    el.style.backgroundColor="green";
    $scope.go[height][width]=1;
  } else{
    el.style.backgroundColor="red";
    $scope.go[height][width]=0;
  }
win();
}
  }]);
