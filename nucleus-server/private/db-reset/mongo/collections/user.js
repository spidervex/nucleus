var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const debugLog = require('debug')('fusion:dbReset:mongo');

/**
 * User Infos
 */
module.exports = async (users) => {
    return new Promise(async (resolve, reject) => {
        debugLog('resetting: users');

        users.collection.drop(async () => {
            debugLog('reset users: done');

            await users.create(
                {
                    "_id": ObjectId("5f022f75295d6d3562ff1100"),
                    "isAdmin": true,
                    "displayName": "Super Mike",
                    "email": "mroberts@spidervex.com"
                }
            );
            await users.create(
                {
                    "_id": ObjectId("5f022f75295d6d3562ff1111"),
                    "isAdmin": false,
                    "displayName": "Admin",
                    "email": "admin@spidervex.com"
                }
            );

            await users.create(
                {
                    "_id": ObjectId("5f022f75295d6d3562ff1122"),
                    "isAdmin": false,
                    "displayName": "User",
                    "email": "user@spidervex.com"
                }
            );

            resolve(true);
        })
    });
}
