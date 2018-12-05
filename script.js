var app=angular.module('Script',[]);
app.controller('ScriptController',['$scope',function($scope){
var root="https://dir.itsapps.unc.edu/dirSearch/auth/search";
$scope.go=function(){
  $.ajax(root,{
    type:'POST',
    data:{'searchString':'ab'},
    success:function(response){
      console.log(response);
    }
  }

  );
}
}
]);
