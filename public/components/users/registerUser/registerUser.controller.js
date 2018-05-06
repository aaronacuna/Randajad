(() => {
  'use strict'
  angular
    .module('randajad')
    .controller('controllerRegisterUser', controllerRegisterUser);
    
    controllerRegisterUser.$inject = ['$http','$state', '$stateParams', '$location','imageUploadService', 'usersService', 'Upload'];

  function controllerRegisterUser($http ,$state, $stateParams, $location, imageUploadService, usersService, Upload) {
    let vm = this;

    vm.nuevoUsuario = {};

    vm.preRegistrarUsuario = (pnuevoUsuario) => {
      vm.cloudObj.data.file = pnuevoUsuario.foto[0];
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.registrarUsuario(pnuevoUsuario, data.url);
     });
    }
 
    vm.registrarUsuario = (pNuevoUsuario, urlImagen) => {

      let annoActual = new Date().getFullYear();
      let annoNacimiento = new Date(pNuevoUsuario.fechaNacimiento).getFullYear();

      let edad = annoActual - annoNacimiento;

      let objNuevoUsuario = new Usuario(pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, urlImagen, pNuevoUsuario.fechaNacimiento, edad, pNuevoUsuario.correo,  pNuevoUsuario.password);

      let registro = usersService.addUsers(objNuevoUsuario);

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/listUser');

    }
  }
})();