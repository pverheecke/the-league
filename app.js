'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');
const path = require('path');
const bookshelf = require('./bookshelf')

const server = new Hapi.Server();

server.connection({
    port: 5000
});

const plugins = [
    require('inert'),
    require('./routes/player_routes.js'),
    require('./routes/team_routes.js')
];

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
    ], err => {
        if (err) {
            throw err;
        }
    });
}

server.register(plugins, err => {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/{file*}',
        handler: {
            directory: {
                path: './public/',
                index: true
            }
        }
    });

    server.ext('onPostHandler', (request, reply) => {
        const response = request.response;
        if (response.isBoom && response.output.statusCode === 404) {
            return reply.file('./public/index.html');
        }
        return reply.continue();
    });

    server.start(err => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
