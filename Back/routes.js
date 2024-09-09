const express = require('express');
const router = express.Router();
const pessoaController = require('./Controller/pessoaController');

router.post('/Pessoa', pessoaController.create);
router.get('/Pessoa', pessoaController.findAll);
router.get('/Pessoa/:Id', pessoaController.findOne);
router.put('/Pessoa/:Id', pessoaController.update);
router.delete('/Pessoa/:Id', pessoaController.delete)

module.exports = router;