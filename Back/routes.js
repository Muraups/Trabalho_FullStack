const express = require('express');
const PessoaController = require('./Controller/PessoaController');

const router = express.Router();

router.post('/Pessoa', PessoaController.create);
router.get('/Pessoa', PessoaController.findAll);
router.get('/Pessoa/:Id', PessoaController.findOne);
router.put('/Pessoa/:Id', PessoaController.update);
router.delete('/Pessoa/:Id', PessoaController.delete)

module.exports = router;