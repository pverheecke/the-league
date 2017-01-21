'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

const server = new Hapi.Server();

const dbConnection = 'mongodb://peter:peterpeter@ds117109.mlab.com:17109/the-league';
const collections = ['teams', 'players'];

server.app.db = mongojs(dbConnection, collections);

const plugins = [
    require('inert')
];

server.connection({
    port: 5000
});

if (process.env.NODE_ENV !== 'production') {
    const WebpackConfig = require('./config/webpack.config.js');
    const HapiWebpackDevMiddleware = require('hapi-webpack-dev-middleware');
    const HapiWebpackHotMiddleware = require('hapi-webpack-hot-middleware');

    server.register([
        {
            register: HapiWebpackDevMiddleware,
            options: {
                config: WebpackConfig,
                options: {
                    noInfo: true,
                    publicPath: WebpackConfig.output.publicPath,
                    stats: {
                        colors: true
                    }
                }
            }
        }, {
            register: HapiWebpackHotMiddleware
        }
    ], (err) => {
        if (err) {
            throw err;
        }
    });
}

server.register(plugins, function(err) {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply.file('./public/index.html');
        }
    });

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
