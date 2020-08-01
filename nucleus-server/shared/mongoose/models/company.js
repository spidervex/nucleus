const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;


const companySchema = new Schema({
    name: { type: String },
    users: { type: Object, default: [] }
});

module.exports = (db) => {
    return db.model('companies', companySchema);
}
