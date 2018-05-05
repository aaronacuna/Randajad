(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: './components/landing/landing.view.html',
        data: {
          pageTitle: 'Randajad App'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/landing/landing.controller.js')
          }]
        },
        controller: 'controllerLanding',
        controllerAs: 'vm'
      })

      .state('registerUser', {
        url: '/registerUser',
        templateUrl: './components/users/registerUser/registerUser.view.html',
        data:{
          pageTitle: 'Registro de Empleados'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/registerUser/registerUser.controller.js')
          }]
        },
        controller: 'controllerRegisterUser',
        controllerAs: 'vm'
      })


      .state('listUser', {
        url: '/listUser',
        templateUrl: './components/users/listUser/listUser.view.html',
        data:{
          pageTitle: 'Lista de Empleados'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/listUser/listUser.controller.js')
          }]
        },
        controller: 'controllerListUser',
        controllerAs: 'vm'
      })


      .state('updateUser', {
        url: '/updateUser',
        templateUrl: './components/users/updateUser/updateUser.view.html',
        data:{
          pageTitle: 'Modificar Usuario'
        },
        params: {
          objUsuarioTemp: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/updateUser/updateUser.controller.js')
          }]
        },
        controller: 'controllerUpdateUser',
        controllerAs: 'vm'
      })

      .state('registerTask', {
        url: '/registerTask',
        templateUrl: './components/tasks/registerTasks/registerTasks.view.html',
        data:{
          pageTitle: 'Registro de Tareas'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tasks/registerTasks/registerTasks.controller.js')
          }]
        },
        controller: 'controllerRegisterTasks',
        controllerAs: 'vm'
      })

      .state('listTasks', {
        url: '/listTasks',
        templateUrl: './components/tasks/listTasks/listTasks.view.html',
        data:{
          pageTitle: 'Lista de Tareas'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tasks/listTasks/listTasks.controller.js')
          }]
        },
        controller: 'controllerListTasks',
        controllerAs: 'vm'
      })

      .state('updateTasks', {
        url: '/updateTasks',
        templateUrl: './components/tasks/updateTasks/updateTasks.view.html',
        data:{
          pageTitle: 'Modificar Tarea'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/tasks/updateTasks/updateTasks.controller.js')
          }]
        },
        controller: 'controllerUpdateTasks',
        controllerAs: 'vm'
      })


    $urlRouterProvider.otherwise('/');
  };

})();
