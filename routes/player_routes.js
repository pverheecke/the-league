'use strict';

const Boom = require('boom');
const Player = require('../models/player.js')

exports.register = (server, options, next) => {

    // get all
    server.route({
        method: 'GET',
        path: '/api/players',
        handler: (request, reply) => {
            Player
                .fetchAll()
                .then(players => {
                    reply({ statusCode: 200, data: players });
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    // get one
    server.route({
        method: 'GET',
        path: '/api/players/{id}',
        handler: (request, reply) => {
            Player.forge({ id: request.params.id })
                .fetch({ require: true })
                .then(player => {
                    reply({ statusCode: 200, data: player });
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    // create
    server.route({
        method: 'POST',
        path: '/api/players',
        handler: (request, reply) => {
            Player.forge({ name: request.payload.name, birthday: request.payload.birthday })
                .fetch()
                .then(player => {
                    if (!player) {
                        Player.forge(request.payload)
                            .save()
                            .then(p => {
                                reply({ statusCode: 201, data: p })
                            }).catch(err => {
                                reply(Boom.wrap(err));
                            });
                    } else {
                        reply({ statusCode: 200, data: player })
                    }
                })
                .catch(err => {
                    reply(Boom.wrap(err));
                });

        }
    });

    // update
    server.route({
        method: 'PATCH',
        path: '/api/players/{id}',
        handler: (request, reply) => {
            Player.forge({ id: request.params.id })
                .save(request.payload, { patch: true })
                .then(player => {
                    reply().code(204);
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    // delete
    server.route({
        method: 'DELETE',
        path: '/api/players/{id}',
        handler: (request, reply) => {
            Player.forge({ id: request.params.id })
                .destroy()
                .then(player => {
                    reply().code(204);
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'routes-players'
};
