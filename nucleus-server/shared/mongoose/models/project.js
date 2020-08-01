var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

//Define a schema
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var projectSchema = new Schema({
    name: { type: String },
    companyId: { type: ObjectId, ref: 'Companies' },
    users: { type: Object, default: [] }
});

module.exports = (db) => {
    return db.model('projects', projectSchema)
}
