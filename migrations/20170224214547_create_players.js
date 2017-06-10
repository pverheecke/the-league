'use strict';

exports.up = (knex, Promise) => {
    return knex.schema.createTable('players', t => {
        t.increments('id').notNullable().primary();
        t.text('name').notNullable();
        t.text('organization').references('mlb_teams.id');
        t.enu('current_level', ['MiLB', 'MLB']);
        t.enu('batting_hand', ['R', 'L', 'S']);
        t.enu('throwing_hand', ['R', 'L', 'S']);
        t.date('birthday');
        t.boolean('disabled').notNullable();
        t.integer('options').notNullable();
        t.integer('salary').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('players');
};
