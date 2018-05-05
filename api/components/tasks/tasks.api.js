const TaskModel = require('./tasks.model');

module.exports.registrar = (req, res) => {
  var newTask = new TaskModel({
    usuario              :  req.body.usuario,
    nombre               :  req.body.nombre,
    descripcion          :  req.body.descripcion,
    fechaAsignacion      :  req.body.fechaAsignacion,
    prioridad            :  req.body.prioridad,
    estadoCompleto       :  req.body.estadoCompleto,
    costo                :  req.body.costo,
    proyecto             :  req.body.proyecto,
    estado               :  req.body.estado,

  });

  newTask.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de tareas' + err});
    }else{
      res.json({success:true, msj:'Se registró la tarea correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  TaskModel.find().then((task) => {
    console.log( 'tarea' + task);
     res.send(task);
    
  });

};

module.exports.actualizar = (req,res) => {
  TaskModel.update({usuario: req.body.usuario}, req.body, (err, task) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};