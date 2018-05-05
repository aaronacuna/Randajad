//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var TaskSchema = new mongoose.Schema({

  usuario : {type : String},
  nombre : {type : String, required : true},
  descripcion : {type : String},
  fechaAsignacion : {type : Date, required : true},
  prioridad : {type : String},
  estadoCompleto : {type : String, required : true},
  costo : {type : String, required : true, unique: true},
  proyecto : {type : String, required : true},
  estado : {type : String, required : true},
});

module.exports = mongoose.model('Task', TaskSchema); 
