const express = require('express');
const router = express.Router();
const controller = require('../controller/canal_controller')

router.get('/', controller.listar);
router.post('/', controller.inserir);

router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

//Busca pela descrição do canal
router.get('/search', controller.procurar);

module.exports = router;