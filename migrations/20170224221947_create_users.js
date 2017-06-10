'use strict';

exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', t => {
        t.text('email').notNullable().primary();
        t.text('password_hash').notNullable();
        t.text('team_id').references('id').inTable('teams').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
};
