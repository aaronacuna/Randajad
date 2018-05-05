(() => {
  'use strict'
  angular
    .module('randajad')
    .controller('controllerListTasks', controllerListTasks);
    
    controllerListTasks.$inject = ['$http','$state', '$stateParams', '$location', 'usersService'];

  function controllerListTasks($http, $state, $stateParams, $location, usersService) {
    let vm = this;

    vm.listaTareas = listarTareas();

    vm.editTarea = (pTarea) =>{
      $state.go('updateTasks', {objTareaTemp : JSON.stringify(pTarea)});

    };

    vm.eliminarTarea = (pnuevaTarea) => {
      
     
      let objNuevaTarea = new Tarea(pnuevaTarea.usuario, pnuevaTarea.nombre, pnuevaTarea.descripcion, pnuevaTarea.fechaAsignacion, pnuevaTarea.prioridad, pnuevaTarea.estadoCompleto, pnuevaTarea.costo, pnuevaTarea.proyecto);

      objNuevaTarea.cambiarEstado('inactivo');
      usersService.updateTarea(objNuevaTarea);
      location.reload();
    }

    vm.activarTarea = (pnuevaTarea) => {
      
     
      let objNuevaTarea = new Tarea(pnuevaTarea.usuario, pnuevaTarea.nombre, pnuevaTarea.descripcion, pnuevaTarea.fechaAsignacion, pnuevaTarea.prioridad, pnuevaTarea.estadoCompleto, pnuevaTarea.costo, pnuevaTarea.proyecto);

      objNuevaTarea.cambiarEstado('activo');
      usersService.updateTarea(objNuevaTarea);
      location.reload();
    }

    function listarTareas(){
      let listaTareas = usersService.getTarea();
      return listaTareas;
    }
  }
})();