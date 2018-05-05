
const mongoose = require('mongoose');

//Esquema de usuarios
var UserSchema = new mongoose.Schema({

  primerNombre : {type : String, required : true},
  segundoNombre : {type : String},
  primerApellido : {type : String, required : true},
  segundoApellido : {type : String},
  foto : {type : String, required : true},
  fechaNacimiento : {type : String, required : true},
  edad : {type : String, required : true},
  correo : {type : String, required : true, unique: true},
  password : {type : String, required : true},
  estado : {type : String, required : true},
  listaTareas: {type : Array}
});

module.exports = mongoose.model('User', UserSchema); 
