'use strict'

const bookshelf = require('../bookshelf');
const MLB_Team = require('./mlb_team')

module.exports = bookshelf.Model.extend({
    tableName: 'players',
    organization: () => {
        return this.belongsTo(MLB_Team);
    }
});
