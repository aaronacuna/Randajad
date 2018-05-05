(() => {
  'use strict';
  angular
    .module('randajad')
    .controller('controllerUpdateUser', controllerUpdateUser);

    controllerUpdateUser.$inject = ['$stateParams', '$state', '$location', 'usersService'];

  function controllerUpdateUser($stateParams, $state, $location, usersService) {
    
    
    let vm = this;

    vm.editarUsuarios = {};

    vm.objNuevoUsuario = {};

    let objUsuarioAEditar = JSON.parse($stateParams.objUsuarioTemp);
    console.log(objUsuarioAEditar);

    let objNuevoUsuario = new Usuario(objUsuarioAEditar.primerNombre, objUsuarioAEditar.segundoNombre, objUsuarioAEditar.primerApellido, objUsuarioAEditar.segundoApellido, objUsuarioAEditar.foto, objUsuarioAEditar.fechaNacimiento,objUsuarioAEditar.edad, objUsuarioAEditar.correo, objUsuarioAEditar.password);

    vm.editarUsuarios.primerNombre = objNuevoUsuario.primerNombre;
    vm.editarUsuarios.segundoNombre = objNuevoUsuario.segundoNombre;
    vm.editarUsuarios.primerApellido = objNuevoUsuario.primerApellido;
    vm.editarUsuarios.segundoApellido = objNuevoUsuario.segundoApellido;
    vm.editarUsuarios.foto = objNuevoUsuario.foto;
    vm.editarUsuarios.fechaNacimiento = objNuevoUsuario.fechaNacimiento;
    vm.editarUsuarios.edad = objNuevoUsuario.edad;
    vm.editarUsuarios.correo = objNuevoUsuario.correo;
    vm.editarUsuarios.password = objNuevoUsuario.password;
    


    vm.editUsuarios = (pUsuario) => {
      let listaUsuarios = usersService.getUsers();

      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.correo == objNuevoUsuario.correo) {
          objUsuario.primerNombre = pUsuario.primerNombre;
          objUsuario.segundoNombre = pUsuario.segundoNombre;
          objUsuario.primerApellido = pUsuario.primerApellido;
          objUsuario.segundoApellido = pUsuario.segundoApellido;
          objUsuario.foto = pUsuario.foto;
          objUsuario.fechaNacimiento = pUsuario.fechaNacimiento;
          objUsuario.edad = pUsuario.edad;
          objUsuario.password = pUsuario.password;
          

          usersService.updateUsers(objUsuario);

        }
      });
      swal("Edición exitosa", "Usuario editado correctamente", "success", {
        button: "Aceptar",
      });
        $state.go('listUser')
    }
  }

})();