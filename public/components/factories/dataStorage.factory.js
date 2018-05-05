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
      setTasksData: _setTasksData,
      getTasksData: _getTasksData,
      updateTasksData: _updateTasksData,
      buscarUsuarioPorId: _buscarUsuarioPorId,
      addTask: _addTask,
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

    function _setTasksData (data) {
      let response;
    
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_task',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'usuario'     : data.usuario,
          'nombre'    :  data.nombre,
          'descripcion'    :  data.descripcion,
          'fechaAsignacion'    :  data.fechaAsignacion,
          'prioridad'    :  data.prioridad,
          'estadoCompleto'    :  data.estadoCompleto,
          'costo'    :  data.costo,
          'proyecto'    :  data.proyecto,
          'estado'    :  data.estado,
        },
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


    function _getTasksData () {
      let listaTareas = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_tasks',
        tyoe: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done ((tareas) => {
         console.log('Datos que vienen desde la base de datos');
          listaTareas = tareas;
      });
      peticion.fail ((error) => {
        listaTareas = [];
        console.log('Ocurrió un error' + error);
      });

      return listaTareas;
    }

    function _updateTasksData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/update_tasks',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'usuario'     : data.usuario,
          'nombre'    :  data.nombre,
          'descripcion'    :  data.descripcion,
          'fechaAsignacion'    :  data.fechaAsignacion,
          'prioridad'    :  data.prioridad,
          'estadoCompleto'    :  data.estadoCompleto,
          'costo'    :  data.costo,
          'proyecto'    :  data.proyecto,
          'estado'    :  data.estado,
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

    function _buscarUsuarioPorId(pid) {
      let usuario = [];
      let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_user_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'id': pid
        }
      });

      peticion.done(function (response) {
        usuario = response;
      });

      peticion.fail(function () {

      });

      return usuario;
    }

    function _addTask (pId, pTarea) {
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/tarea_tarea',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          _id: pId,
          nombre: pTarea.nombre,
        },
      });
    
      peticion.done (function (response) {});
    
      peticion.fail (function () {});
    }


  }
})();