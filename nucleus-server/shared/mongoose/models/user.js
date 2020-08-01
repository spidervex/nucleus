var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    displayName: String,
    email: String,
    isAdmin: { type: Boolean, default: false }
});

module.exports = (db) => {
    return db.model('users', userSchema)
}
