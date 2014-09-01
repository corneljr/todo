angular
	.module('app')
	.factory('Task', function($resource) {
		var Todo = $resource('http://localhost:3000/api/tasks/:id.json', {id: '@id'}, {
			update: {
				method: 'PUT'
			}
		});

		return Todo;
	});