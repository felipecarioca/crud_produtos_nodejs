var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const CanalSchema = new Schema({
    descricao: String,
    taxa: Number
}, {
    versionKey:false
});

module.exports = mongoose.model("Canal", CanalSchema);