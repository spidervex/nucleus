var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const debugLog = require('debug')('db-reset:mongo:project');

/**
 * Projects
 */
module.exports = async (projects) => {
    return new Promise(async (resolve, reject) => {
        debugLog('resetting: projects');

        projects.collection.drop(async () => {
            debugLog('reset projects: done');

            await projects.create(
                {
                    "_id": ObjectId("5f022f75295d6d3562ffffaa"),
                    "companyId": ObjectId("5f022f75295d6d3562ffff00"),
                    "name": "Census 2020",
                    "users": [
                        {
                            userId: '5cfe904329d4fc5555566611',
                            role: 'mapViewer'
                        },
                        {
                            userId: '5cfe904329d4fc5555566666',
                            role: 'admin'
                        }
                    ]
                }
            );

            resolve(true);
        })
    });
}
