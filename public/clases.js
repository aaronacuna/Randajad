class Usuario {
  constructor(pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pFoto, pFechaNacimiento, pEdad, pCorreo, pPassword) {

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

  cambiarEstado(pEstado) {
      this.estado = pEstado;
  }

  agregarTarea(pNuevaTarea) {
    this.listaTareas.push(pNuevaTarea);
  }
  
}


class Tarea{
  constructor(pNombre, pDescripcion, pFechaAsignacion, pPrioridad, pEstadoCompleto, pCosto, pProyecto){

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