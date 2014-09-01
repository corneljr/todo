angular
	.module('app')
	.controller('MainCtrl', ['Task','$scope', function(Task, $scope){
		$scope.tasks = Task.query();

		$scope.$on('$routeChangeSuccess', function(){
			var status = $scope.status = $routeParams.status || '';

			$scope.statusFilter = (status === 'active') ? { completed: false } : (status === 'completed') ? { completed: true } : null;
		});

		var uncompletedTasks;

		$scope.activeTask = new Task();
		$scope.checked = false;

		$scope.edit = function(task) {
			$scope.activeTask = task;
		};

		$scope.checkAll = function(checked) {
			_.each($scope.tasks, function(task){
				$scope.checkAndSave(task, checked);
			});
		};

		$scope.checkAndSave = function(task, checked) {
			task.completed = checked || !!(!task.completed);
			$scope.save(task);
		};

		$scope.save = function(task) {
			if (!_.include($scope.tasks, task)) {
				$scope.tasks.push(task);
				tasks.$save();
			} else {
				Task.update(task);
			}
			updateRemainingTaskCount();
			$scope.activeTodo = new Task();
		}

		$scope.remove = function(task) {
			Task.delete(task);
			_.remove($scope.tasks, task);
			updateRemainingTaskCount();
		};

		function updateRemainingTaskCount() {
			uncompletedTasks = _.chain($scope.tasks)
													.map(function(task) { return !task.completed })
													.compact()
													.value();
			$scope.remainingCount = uncompletedTodos.length;
		}

	}]);