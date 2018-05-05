const express = require('express'),
      router = express.Router(),
      users = require('./users.api');


      router.param('id', (req, res, next, id) => {
        req.body.id = id;
        next();
      });


router.route('/save_user')
  .post((req, res) => {
    users.registrar(req,res);
});


router.route('/get_all_users')
  .get((req, res) => {
    console.log( 'uholi');
    users.listarTodos(req,res);
});


router.route('/update_user')
  .put((req, res) => {
    users.actualizar(req,res);
});

module.exports = router;