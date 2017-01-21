'use strict';

const Boom = require('boom');
const Joi = require('joi');
const uuid = require('uuid/v1');

exports.register = function(server, options, next) {
    const db = server.app.db;

    // get all
    server.route({
        method: 'GET',
        path: '/api/teams',
        handler: function(request, reply) {
            db.teams.find((err, docs) => {
                if (err) {
                    return reply(Boom.wrap(err, "Internal MongoDB error"));
                }
                reply(docs);
            });
        }
    });

    // get one
    server.route({
        method: 'GET',
        path: '/api/teams/{id}',
        handler: function(request, reply) {
            db.teams.findOne({
                _id: request.params.id
            }, (err, doc) => {
                if (err) {
                    return reply(Boom.wrap(err, "Internal MongoDB error"));
                }
                if (!doc) {
                    return reply(Boom.notFound());
                }
                reply(doc);
            });
        }
    });

    // create
    server.route({
        method: 'POST',
        path: '/api/teams',
        handler: function(request, reply) {
            const team = request.payload;
            team._id = uuid();
            db.teams.save(team, (err, result) => {
                if (err) {
                    return reply(Boom.wrap(err, "Internal MongoDB error"));
                }
                reply(team);
            });
        },
        config: {
            validate: {
                payload: {
                    // list of players, name, logo, owner, free agent budget, draft cash, record, division,
                    name: Joi.string().required(),
                    abbreviation: Joi.string().required(),
                    players: Joi.array().items(Joi.string()).max(34),
                    owner: Joi.string(),
                    faab: Joi.number().max(50).min(0),
                    draft_cash: Joi.number(),
                    division: Joi.number().min(1).max(3).required(),
                    logo: Joi.string(),

                }
            }
        }
    });

    // update
    server.route({
        method: 'PATCH',
        path: '/api/teams/{id}',
        handler: function(request, reply) {
            db.teams.update({
                _id: request.params.id
            }, {
                $set: request.payload
            }, (err, result) => {
                if (err) {
                    return reply(Boom.wrap(err, "Internal MongoDB error"));
                }
                if (result.n === 0) {
                    return reply(Boom.notFound());
                }
                reply().code(204);
            });
        },
        config: {
            validate: {
                payload: Joi.object({
                    // list of players, name, logo, owner, free agent budget, draft cash, record, division,
                    name: Joi.string(),
                    players: Joi.array().items(Joi.string()).max(34),
                    owner: Joi.string(),
                    faab: Joi.number().max(50).min(0)
                }).required().min(1)
            }
        }
    });

    // delete
    server.route({
        method: 'DELETE',
        path: '/api/teams/{id}',
        handler: function (request, reply) {
            db.teams.remove({
                _id: request.params.id
            }, function (err, result) {
                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }
                if (result.n === 0) {
                    return reply(Boom.notFound());
                }
                reply().code(204);
            });
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-teams'
};
