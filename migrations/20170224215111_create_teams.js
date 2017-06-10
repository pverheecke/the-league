'use strict';

exports.up = (knex, Promise) => {
    return knex.schema.createTable('teams', t => {
        t.text('id').notNullable().primary();
        t.text('name').notNullable();
        t.jsonb('roster').notNullable();
        t.integer('faab').notNullable();
        t.integer('draft_cash').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('teams');
};
