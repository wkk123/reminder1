var remd=angular.module('reminder',[]);
remd.controller('mainCtrl',[
   '$scope',
   '$timeout',
   function($scope,$timeout){ 

      $scope.database=[{
            'id':0,
            'listname':'新列表'+1,
            'theme':'red',
            'todo':[{
              'id':100,
              'name':'wode',
              'isDone':false,
            }]  }];

      $scope.current=$scope.database[0]

      $scope.themes=['red','green','yellow','blue','orange','purple','brown'];

        $scope.add=function(i){ 
          var l=$scope.database.length;  
          if($scope.database.length === 0){
            var id=0;
          }else{
            var id=$scope.database[$scope.database.length-1].id+1;
          }       
          var theme=$scope.themes[l%7];
          $scope.current={
            'id':id,
            'listname':'新列表'+(l+1),
            'theme':theme,
            'todo':[] 
             };
          $scope.database.push($scope.current);   

        }

          $scope.setcurrent=function(i){
            $scope.current=i;
          };
          
          // 再点击选项时防止冒泡
          $scope.cancel=function(ev){
            ev.stopPropagation();
          }
          //删除土豆
          $scope.delitem=function(dd){
            var arr=[];
            for(var i=0;i<$scope.database.length;i++){
              
              if(Number($scope.database[i].id) !== dd){
                 arr.push($scope.database[i]);
              }
            }
            $scope.database=arr;
            $scope.current=$scope.database[0];


          }




          $scope.addtodo=function(){ 
            var l=$scope.current.todo.length;  
          if(l === 0){
            var id=0;
          }else{
            var id=$scope.current.todo[l-1].id+1;
          }  
          var newtodo={
                id:id,
                'name':'',
                'isDone':false,
              }
           $scope.current.todo.push(newtodo);
              $scope.currenttodo = newtodo;              
          }

          $scope.settodo = function(todo){
          $scope.currenttodo = todo;
          }
          



   }


  ])