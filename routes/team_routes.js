'use strict';

const Boom = require('boom');
const Team = require('../models/team')

exports.register = function(server, options, next) {
    const db = server.app.db;

    // get all
    server.route({
        method: 'GET',
        path: '/api/teams',
        handler: function(request, reply) {
            Team
                .fetchAll()
                .then(teams => {
                    reply({ statusCode: 200, data: teams });
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    // get one
    server.route({
        method: 'GET',
        path: '/api/teams/{id}',
        handler: function(request, reply) {
            Team.forge({ id: request.params.id })
                .fetch({ require: true })
                .then(team => {
                    reply({ statusCode: 200, data: team });
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    // create
    server.route({
        method: 'POST',
        path: '/api/teams',
        handler: function(request, reply) {
            Team.forge(JSON.parse(request.payload))
                .save()
                .then(team => {
                    reply({ statusCode: 201, data: team })
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    // update
    server.route({
        method: 'PATCH',
        path: '/api/teams/{id}',
        handler: function(request, reply) {
            Team.forge({ id: request.params.id })
                .save(JSON.parse(request.payload), { patch: true })
                .then(team => {
                    reply().code(204);
                }).catch(err => {
                    reply(Boom.wrap(err));
                });
        }
    });

    // delete
    server.route({
        method: 'DELETE',
        path: '/api/teams/{id}',
        handler: function (request, reply) {
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
    name: 'routes-teams'
};
