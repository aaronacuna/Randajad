(() => {
  'use strict';
  angular
    .module('randajad')
    .controller('controllerUpdateTasks', controllerUpdateTasks);

    controllerUpdateTasks.$inject = ['$stateParams', '$state', '$location', 'usersService'];

  function controllerUpdateTasks($stateParams, $state, $location, usersService) {
    
    
    let vm = this;

    vm.editarTarea = {};

    vm.objNuevaTarea = {};

    let objTareaAEditar = JSON.parse($stateParams.objTareaTemp);
    console.log(objTareaAEditar);

    let objNuevaTarea = new Tarea(objTareaAEditar.usuario, objTareaAEditar.nombre, objTareaAEditar.descripcion, objTareaAEditar.fechaAsignacion, objTareaAEditar.prioridad, objTareaAEditar.estadoCompleto,objTareaAEditar.costo, objTareaAEditar.proyecto);

    vm.editarTarea.usuario = objNuevaTarea.usuario;
    vm.editarTarea.nombre = objNuevaTarea.nombre;
    vm.editarTarea.descripcion = objNuevaTarea.descripcion;
    vm.editarTarea.fechaAsignacion = objNuevaTarea.fechaAsignacion;
    vm.editarTarea.prioridad = objNuevaTarea.prioridad;
    vm.editarTarea.estadoCompleto = objNuevaTarea.estadoCompleto;
    vm.editarTarea.costo = objNuevaTarea.costo;
    vm.editarTarea.proyecto = objNuevaTarea.proyecto;

    vm.editTarea = (pTarea) => {
      let listaTarea = usersService.getTarea();

      listaTarea.forEach(objTarea => {
        if (objTarea.nombre == objNuevaTarea.nombre) {
          objTarea.usuario = pTarea.usuario;
          objTarea.nombre = pTarea.nombre;
          objTarea.descripcion = pTarea.descripcion;
          objTarea.fechaAsignacion = pTarea.fechaAsignacion;
          objTarea.prioridad = pTarea.prioridad;
          objTarea.estadoCompleto = pTarea.estadoCompleto;
          objTarea.costo = pTarea.costo;
          objTarea.proyecto = pTarea.proyecto;

          usersService.updateTarea(objTarea);

        }
      });
      swal("Edición exitosa", "Usuario editado correctamente", "success", {
        button: "Aceptar",
      });
        $state.go('listTasks')
    }
  }

})();