(() => {
  'use strict'
  angular
    .module('randajad')
    .controller('controllerRegisterUser', controllerRegisterUser);
    
    controllerRegisterUser.$inject = ['$http','$state', '$stateParams', '$location', 'usersService', 'imageService'];

  function controllerRegisterUser($http ,$state, $stateParams, $location, usersService, imageService) {
    let vm = this;

    vm.nuevoUsuario = {};
 
    vm.registrarUsuario = (pNuevoUsuario) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.foto, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.edad, pNuevoUsuario.correo,  pNuevoUsuario.password);

      let registro = usersService.addUsers(objNuevoUsuario);

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/listUser');

    }
  }
})();