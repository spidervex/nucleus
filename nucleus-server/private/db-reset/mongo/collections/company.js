var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const debugLog = require('debug')('db-reset:mongo:company');


module.exports = async (company) => {

    return new Promise(async (resolve, reject) => {
        debugLog('resetting');

        company.collection.drop(async () => {
            debugLog('reset company');

            await company.create(
                {
                    "_id": ObjectId("5f022f75295d6d3562ffff00"),
                    "name": "Nucleus Demo Inc.",
                    "users": [
                        {
                            userId: '5f022f75295d6d3562ff1111',
                            role: 'admin'
                        },
                        {
                            userId: '5f022f75295d6d3562ff1122',
                            role: 'user'
                        }
                    ]
                }
            );

            await company.create(
                {
                    "_id": ObjectId("5f022f75295d6d3562ffff11"),
                    "name": "Mockingbird Technologies",
                    "users": [
                        {
                            userId: '5f022f75295d6d3562ff1111',
                            role: 'admin'
                        }
                    ]
                }
            );

            resolve(true);
        })
    });
}
