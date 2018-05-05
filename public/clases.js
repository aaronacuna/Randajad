class Usuario {
  constructor(pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pFoto, pFechaNacimiento, pEdad, pCorreo, pPassword) {
      this._id = 0;
      this.primerNombre = pPrimerNombre;
      this.segundoNombre = pSegundoNombre;
      this.primerApellido = pPrimerApellido;
      this.segundoApellido = pSegundoApellido;
      this.foto = pFoto;
      this.fechaNacimiento = pFechaNacimiento;
      this.edad = pEdad;
      this.correo = pCorreo;
      this.password = pPassword;
      this.listaTareas = [];
      this.estado = 'activo';
  }

  setId(pId){
    this._id= pId;
}

  cambiarEstado(pEstado) {
      this.estado = pEstado;
  }

    addTask(pNuevaTarea) {
    this.listaTareas.push(pNuevaTarea);
  }
  
}


class Tarea{
  constructor(pUsuario, pNombre, pDescripcion, pFechaAsignacion, pPrioridad, pEstadoCompleto, pCosto, pProyecto){
      this.usuario = pUsuario;
      this.nombre = pNombre;
      this.descripcion = pDescripcion;
      this.fechaAsignacion = pFechaAsignacion;
      this.prioridad = pPrioridad;
      this.estadoCompleto = pEstadoCompleto;
      this.costo = pCosto;
      this.proyecto = pProyecto;
      this.estado = 'activo';
  }

  cambiarEstado(pEstado) {
      this.estado = pEstado;
  }
}