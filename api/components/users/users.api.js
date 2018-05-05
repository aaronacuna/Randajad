const UserModel = require('./users.model');

module.exports.registrar = (req, res) => {
  var newUser = new UserModel({
    primerNombre        :  req.body.primerNombre,
    segundoNombre       :  req.body.segundoNombre,
    primerApellido      :  req.body.primerApellido,
    segundoApellido     :  req.body.segundoApellido,
    foto                :  req.body.foto,
    edad                :  req.body.edad,
    correo              :  req.body.correo,
    fechaNacimiento     :  req.body.fechaNacimiento,
    password            :  req.body.password,
    estado              :  req.body.estado,
    listaTareas         :  req.body.listaTareas,
  });

  newUser.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de usuarios' + err});
    }else{
      res.json({success:true, msj:'Se registró el usuario correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  UserModel.find().then((user) => {
    console.log( 'usuario' + user);
     res.send(user);
    
  });

};

module.exports.actualizar = (req,res) => {
  UserModel.update({correo: req.body.correo}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};