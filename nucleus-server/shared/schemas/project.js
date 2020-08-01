const Joi = require("@hapi/joi");

const schema = Joi.object({
    companyId: Joi.string(),
    name: Joi.string().allow('', null),
    userRoles: Joi.array().items(Joi.object),
});

module.exports = schema;
