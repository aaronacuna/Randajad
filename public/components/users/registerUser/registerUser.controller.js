(() => {
  'use strict'
  angular
    .module('randajad')
    .controller('controllerRegisterUser', controllerRegisterUser);
    
    controllerRegisterUser.$inject = ['$http','$state', '$stateParams', '$location', 'usersService', 'imageService', 'Upload'];

  function controllerRegisterUser($http ,$state, $stateParams, $location, usersService, imageService, Upload) {
    let vm = this;

    vm.nuevoUsuario = {};

    vm.cloudObj = imageService.getConfiguration();

    vm.preRegistrarUsuario = (pNuevoUsuario) => {
      vm.cloudObj.data.file = pNuevoUsuario.foto;
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.registrarUsuario(pNuevoUsuario, data.url);
     });
    }
 
    vm.registrarUsuario = (pNuevoUsuario, imgUrl) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, imgUrl, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.edad, pNuevoUsuario.correo,  pNuevoUsuario.password);

      let registro = usersService.addUsers(objNuevoUsuario);

      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $location.path('/listUser');

    }
  }
})();