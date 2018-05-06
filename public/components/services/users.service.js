(() => {
    'use strict';
    angular
        .module('randajad')
        .service('usersService', usersService)

    usersService.$inject = ['$log', '$http', 'dataStorageFactory'];

    function usersService($log, $http, dataStorageFactory) {

        const asyncLocalStorage = {
            setItem: function (key, value) {
                return Promise.resolve().then(() => {
                    let response = true;
                    localStorage.setItem(key, JSON.stringify(value));
                    return response
                });
            }
        };


        let publicAPI = {
            addUsers: _addUsers,
            getUsers: _getUsers,
            updateUsers: _updateUsers,
            addTarea: _addTarea,
            getTarea: _getTarea,
            updateTarea: _updateTarea,
            }
        
            return publicAPI

        
        function _addUsers(pNuevoUsuario) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setUsersData(pNuevoUsuario);

            return registroExitoso;
        }

        function _getUsers() {
            let listaUsuarios = [];
            let listaUsuariosBD = dataStorageFactory.getUsersData();
            
            listaUsuariosBD.forEach(objUsuario => {
                    let tempDate = new Date(objUsuario.fechaNacimiento);
                    let objUsuarioTemp = new Usuario(objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.foto, tempDate, objUsuario.edad, objUsuario.correo, objUsuario.password)
                    objUsuarioTemp.cambiarEstado(objUsuario.estado);
                    objUsuarioTemp.setId(objUsuario._id);
                    listaUsuarios.push(objUsuarioTemp);
                });


            return listaUsuarios;
        };



        function _updateUsers(pUsuario) {
            let modificacionExitosa = false;

            modificacionExitosa = dataStorageFactory.updateUsersData(pUsuario);

            return modificacionExitosa;
        }

        
        function _addTarea(pNuevaTarea) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setTasksData(pNuevaTarea);

            return registroExitoso;
        }

        function _getTarea() {
            let listaTareas = [];
            let listaTareasBD = dataStorageFactory.getTasksData();
            listaTareasBD.forEach(objTarea => {
                    let tempDate = new Date(objTarea.fechaAsignacion);
                    let objTareaTemp = new Tarea(objTarea.usuario, objTarea.nombre, objTarea.descripcion, tempDate, objTarea.prioridad, objTarea.estadoCompleto, objTarea.costo, objTarea.proyecto)
                    objTareaTemp.cambiarEstado(objTarea.estado);
                    listaTareas.push(objTareaTemp);
                });


            return listaTareas;
        };

        function _updateTarea(pTarea) {
            let modificacionExitosa = false;

            modificacionExitosa = dataStorageFactory.updateTasksData(pTarea);

            return modificacionExitosa;
        }


        };
        
})();