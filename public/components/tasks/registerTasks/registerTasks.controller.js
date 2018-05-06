(() => {
  'use strict';
  angular
    .module ('randajad')
    .controller ('controllerRegisterTasks', controllerRegisterTasks);

  controllerRegisterTasks.$inject = ['$http','$state','$stateParams','$location','usersService'];

  function controllerRegisterTasks ( $http, $state, $stateParams, $location, usersService) {
    let vm = this;

    vm.nuevaTarea = {};

    
    vm.registrarTarea = (pnuevaTarea) => {
      let objUsuarioAsignar = JSON.parse ($stateParams.objUsuarioTemp);
      let usuario = objUsuarioAsignar.correo;


      let objNuevaTarea = new Tarea (usuario, pnuevaTarea.nombre, pnuevaTarea.descripcion, pnuevaTarea.fechaAsignacion, pnuevaTarea.prioridad, pnuevaTarea.estadoCompleto, pnuevaTarea.costo, pnuevaTarea.proyecto);

      let registro = usersService.addTarea(objNuevaTarea);

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/listTasks');

    }
  }
})();
