const debugLog = require('debug')('db-reset');
const mongoose = require('mongoose');
debugLog('starting');
debugLog('env', process.env.NODE_ENV);

if(process.env.NODE_ENV !== 'development') {
    process.exit();
}



// only allow if in development mode
if(process.env.NODE_ENV === 'development') {

    const mongoReset = require('./mongo/mongo');

    mongoose.connect('mongodb://localhost:27017/dev', {useNewUrlParser: true, useUnifiedTopology: true});
    debugLog('connect');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        debugLog('connected!');
        // fetch models, passing in db connection
        const company = require('../../shared/mongoose/models/company')(db);
        const project = require('../../shared/mongoose/models/project')(db);
        const user = require('../../shared/mongoose/models/user')(db);

        Promise.all([
            mongoReset.company(company),
            mongoReset.project(project),
            mongoReset.user(user),
        ]).then(async () => {
            process.exit();
        });

    });
}
