'use strict';

exports.up = (knex, Promise) => {
    return knex.schema.createTable('mlb_teams', t => {
        t.text('id').notNullable().primary();
        t.text('city').notNullable();
        t.text('name').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('mlb_teams');
};
