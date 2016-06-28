angular.module('ToDo', []).
    controller('todoController', ['$scope', function($scope){
        
        $scope.todos = [];

        $scope.addToDo = function(){
            
            var newTitle = $scope.newToDo.trim();
            if(newTitle)
                $scope.todos.push({
                    'title': newTitle,
                    'done': false
                });

                $scope.newToDo = '';
        }
        
        $scope.clear = function(todo){
            $scope.todos = $scope.todos.filter(function(item){
                if(todo!=item)
                    return item;
            })
        }
        
        $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter(function(item){
                return !item.done;
            })
        }
        
        $scope.markAll = function () {
            angular.forEach($scope.todos, function (item) {
                item.done = $scope.allChecked;
            });
            
		};
        
        
        
    }])