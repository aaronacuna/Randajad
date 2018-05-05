(() => {
  'use strict';
  angular
    .module('randajad')
    .factory('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];

  function dataStorageFactory($q, $log, $http) {

    const localAPI = {
      setUsersData: _setUsersData,
      getUsersData: _getUsersData,
      updateUsersData: _updateUsersData,
    };

    return localAPI;


       function _setUsersData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'foto': data.foto,
          'fechaNacimiento': data.fechaNacimiento,
          'edad': data.edad,
          'correo': data.correo,
          'password': data.password,
          'estado': data.estado,
          'listaTareas': data.listaTareas
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    
    function _getUsersData () {
      let listaUsuarios = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_users',
        tyoe: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done ((usuarios) => {
         console.log('Datos que vienen desde la base de datos');
          listaUsuarios = usuarios;
      });
      peticion.fail ((error) => {
        listaUsuarios = [];
        console.log('Ocurrió un error' + error);
      });

      return listaUsuarios;
    }


    function _updateUsersData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/update_user',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'foto': data.foto,
          'fechaNacimiento': data.fechaNacimiento,
          'edad': data.edad,
          'correo': data.correo,
          'password': data.password,
          'estado': data.estado,
          'listaTareas': data.listaTareas
        }
      });

      peticion.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }


    // 
    //Final usuarios
    //


  }
})();