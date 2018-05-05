const express = require('express'),
      router = express.Router(),
      tasks = require('./tasks.api');


      router.param('id', (req, res, next, id) => {
        req.body.id = id;
        next();
      });


router.route('/save_task')
  .post((req, res) => {
    tasks.registrar(req,res);
});


router.route('/get_all_tasks')
  .get((req, res) => {
    console.log( 'uholi');
    tasks.listarTodos(req,res);
});


router.route('/update_tasks')
  .put((req, res) => {
    tasks.actualizar(req,res);
});

module.exports = router;