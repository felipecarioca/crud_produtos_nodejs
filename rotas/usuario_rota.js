const express = require('express');
const router = express.Router();
const controller = require('../controller/usuario_controller')

router.get('/', controller.listar);
router.post('/', controller.inserir);
router.post('/auth', controller.validaUsuario);

router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

// Busca pelo nome do usuário
router.get('/search', controller.buscarUsuario);

module.exports = router;