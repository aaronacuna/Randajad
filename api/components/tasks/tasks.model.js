//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var UserSchema = new mongoose.Schema({

  cedula : {type : String, required : true},
  primerNombre : {type : String, required : true},
  segundoNombre : {type : String},
  primerApellido : {type : String, required : true},
  segundoApellido : {type : String},
  edad : {type : String, required : true},
  correo : {type : String, required : true, unique: true},
  telefono : {type : String, required : true},
  password : {type : String, required : true},
  confirmedPassword : {type : String},
  estado : {type : String, required : true}
});

module.exports = mongoose.model('User', UserSchema); 
