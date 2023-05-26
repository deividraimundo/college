const Joi = require("joi");

const postAluno = {
    payload: Joi.object({
        nome: Joi
            .string()
            .min(3)
            .max(100)
            .required(),
        codigo: Joi
            .number()
            .integer()
            .required(),
        curso: Joi
            .string()
            .max(20),
        instituicao: Joi
            .string()
            .max(50)
    }).required()
};

const update = {
    params: Joi.object({
        codigo: Joi
            .number()
            .integer()
            .required()
    }),
    payload: Joi.object({
        nome: Joi
            .string()
            .min(3)
            .max(100)
            .required(),
        codigo: Joi
            .number()
            .integer()
            .required(),
        curso: Joi
            .string()
            .max(20),
        instituicao: Joi
            .string()
            .max(50)
    }).required()
};

module.exports = {postAluno, update};