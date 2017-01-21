'use strict';

const Boom = require('boom');
const Joi = require('joi');
const uuid = require('uuid/v1');

exports.register = function(server, options, next) {
    const db = server.app.db;

    // get all
    server.route({
        method: 'GET',
        path: '/api/players',
        handler: function(request, reply) {
            db.players.find((err, docs) => {
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
        path: '/api/players/{id}',
        handler: function(request, reply) {
            db.players.findOne({
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
        path: '/api/players',
        handler: function(request, reply) {
            const player = request.payload;
            player._id = uuid();
            db.players.save(team, (err, result) => {
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

                }
            }
        }
    });

    // update
    server.route({
        method: 'PATCH',
        path: '/api/players/{id}',
        handler: function(request, reply) {
            db.players.update({
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
                    // validation
                }).required().min(1)
            }
        }
    });

    // delete
    server.route({
        method: 'DELETE',
        path: '/api/players/{id}',
        handler: function (request, reply) {
            db.players.remove({
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
    name: 'routes-players'
};
