const Canal = require('../model/canal')

exports.listar = (req, res) => { 
    Canal.find({},(err, canais) => {
        if(err){
            res.status(500).send(err);
        }
        res.json(canais);
    });
}

exports.inserir = (req, res) => {
    let novoCanal = new Canal(req.body);        
    novoCanal.save((err, canal) => {
        if(err){
            res.send(err);
        }    
        res.status(201).json(canal);
        
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.id;
    let canalAtualizar = req.body;
    Canal.findOneAndUpdate({ _id: id }, canalAtualizar, { new: true }, (err, canalAtual) => {
        if(err){
            res.send(err);
        }
        res.json(canalAtual);
    });
}

exports.deletar = (req, res) => {
    let id = req.params.id;
    Canal.findOneAndDelete({ _id: id }, (err, canalAtual) => {
        if(err){
            res.send(err);
        }
        res.json(canalAtual);
    });
}

exports.buscarPorId = (req, res) => {
    let id = req.params.id;
    Canal.findById(id, (err, canal) => {
        if(err)
            res.status(500).send(err);        
        res.json(canal);
    });    
}

exports.procurar = (req, res, next) => {
    if (req.query && req.query.nome){
        const paramNome = req.query.nome;
        Canal.find({nome: paramNome}, (err, canais) => {
            if(err){
                res.status(500).send(err);
            }
            res.json(canais);
        });
    }
}
