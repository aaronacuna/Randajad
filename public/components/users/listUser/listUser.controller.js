(() => {
  'use strict'
  angular
    .module('randajad')
    .controller('controllerListUser', controllerListUser);
    
    controllerListUser.$inject = ['$http','$state', '$stateParams', '$location', 'usersService', 'imageService', 'Upload'];

  function controllerListUser($http, $state, $stateParams, $location, usersService, imageService, Upload) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();

    vm.asignarTarea = (pUsuario) =>{
      $state.go('registerTasks', {objUsuarioTemp : JSON.stringify(pUsuario)});
    };
    
    vm.editUsuarios = (pUsuario) =>{
      $state.go('updateUser', {objUsuarioTemp : JSON.stringify(pUsuario)});

    };

    vm.eliminarUsuario = (pnuevoUsuario) => {
      
     
      let objNuevoUsuario = new Usuario(pnuevoUsuario.primerNombre, pnuevoUsuario.segundoNombre, pnuevoUsuario.primerApellido, pnuevoUsuario.segundoApellido, pnuevoUsuario.foto, pnuevoUsuario.fechaNacimiento, pnuevoUsuario.edad, pnuevoUsuario.correo, pnuevoUsuario.password);

      objNuevoUsuario.cambiarEstado('inactivo');
      usersService.updateUsers(objNuevoUsuario);
      location.reload();
    }

    vm.activarUsuario = (pnuevoUsuario) => {
      
     
      let objNuevoUsuario = new Usuario(pnuevoUsuario.primerNombre, pnuevoUsuario.segundoNombre, pnuevoUsuario.primerApellido, pnuevoUsuario.segundoApellido, pnuevoUsuario.foto, pnuevoUsuario.fechaNacimiento, pnuevoUsuario.edad, pnuevoUsuario.correo, pnuevoUsuario.password);

      objNuevoUsuario.cambiarEstado('activo');
      usersService.updateUsers(objNuevoUsuario);
      location.reload();
    }

    function listarUsuarios(){
      let listaUsuarios = usersService.getUsers();
      return listaUsuarios;
    }
  }
})();