(() => {
  'use strict'
  angular
    .module('randajad')
    .controller('controllerRegisterUser', controllerRegisterUser);
    
    controllerRegisterUser.$inject = ['$http','$state', '$stateParams', '$location', 'usersService'];

  function controllerRegisterUser($http ,$state, $stateParams, $location, usersService) {
    let vm = this;

    vm.nuevoUsuario = {};
 
    vm.registrarUsuario = (pNuevoUsuario) => {

      let annoActual = new Date().getFullYear();
      let annoNacimiento = new Date(pNuevoUsuario.fechaNacimiento).getFullYear();

      let edad = annoActual - annoNacimiento;

      let objNuevoUsuario = new Usuario(pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.foto, pNuevoUsuario.fechaNacimiento, edad, pNuevoUsuario.correo,  pNuevoUsuario.password);

      let registro = usersService.addUsers(objNuevoUsuario);

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/listUser');

    }
  }
})();