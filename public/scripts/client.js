angular.module('todo', []);

angular.module('todo').controller('MainController', function ($http) {

  var vm = this;

  vm.value = false;
  vm.addTask = addTask;
  vm.getTasks = getTasks;
  vm.removeTask = removeTask;
  function getTasks() {
    $http.get('/todo').then(function (response) {
      console.log(response);
      vm.tasks = response.data;
    }, function (response) {
      console.log(response);
    });

  }

  function addTask() {

    $http.post('/todo', this.task).then(function (response) {
      console.log(response);
      vm.task = {};
      getTasks();
    }, function (response) {
      console.log(response);
      vm.task = {};
      getTasks();
    });
  }

  function removeTask(task) {
    console.log('Sending server: ', task);
    $http.delete('/todo/' + task._id).then(function (response) {
      console.log(response);
      getTasks();
    }, function (response) {
      console.log(response);
      getTasks();
    });
  }

  getTasks();
});
