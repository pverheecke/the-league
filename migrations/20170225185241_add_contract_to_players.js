'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.table('players', t => {
        t.text('contract');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('players', t => {
        t.dropColumn('contract');
    })
};
