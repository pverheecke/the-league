'use strict';

exports.seed = (knex, Promise) => {
    return knex('mlb_teams').del()
        .then(() => {
            return knex('mlb_teams').insert([
                    {id: 'SFG', city: 'San Francisco', name: 'Giants'},
                    {id: 'LAD', city: 'Los Angeles', name: 'Dodgers'},
                    {id: 'SDP', city: 'San Diego', name: 'Padres'},
                    {id: 'COL', city: 'Colorado', name: 'Rockies'},
                    {id: 'ARI', city: 'Arizona', name: 'Diamondbacks'},
                    {id: 'CHC', city: 'Chicago', name: 'Cubs'},
                    {id: 'STL', city: 'St. Louis', name: 'Cardinals'},
                    {id: 'MIL', city: 'Milwaukee', name: 'Brewers'},
                    {id: 'CIN', city: 'Cincinnati', name: 'Reds'},
                    {id: 'PIT', city: 'Pittsburgh', name: 'Pirates'},
                    {id: 'ATL', city: 'Atlanta', name: 'Braves'},
                    {id: 'NYM', city: 'New York', name: 'Mets'},
                    {id: 'WAS', city: 'Washington', name: 'Nationals'},
                    {id: 'MIA', city: 'Miami', name: 'Marlins'},
                    {id: 'PHI', city: 'Philadelphia', name: 'Phillies'},
                    {id: 'OAK', city: 'Oakland', name: 'Athletics'},
                    {id: 'SEA', city: 'Seattle', name: 'Mariners'},
                    {id: 'TEX', city: 'Texas', name: 'Rangers'},
                    {id: 'HOU', city: 'Houston', name: 'Astros'},
                    {id: 'LAA', city: 'Los Angeles', name: 'Angels of Anaheim'},
                    {id: 'CHW', city: 'Chicago', name: 'White Sox'},
                    {id: 'CLE', city: 'Cleveland', name: 'Indians'},
                    {id: 'KCR', city: 'Kansas City', name: 'Royals'},
                    {id: 'DET', city: 'Detroit', name: 'Tigers'},
                    {id: 'MIN', city: 'Minnesota', name: 'Twins'},
                    {id: 'NYY', city: 'New York', name: 'Yankees'},
                    {id: 'BOS', city: 'Boston', name: 'Red Sox'},
                    {id: 'TBR', city: 'Tampa Bay', name: 'Rays'},
                    {id: 'BAL', city: 'Baltimore', name: 'Orioles'},
                    {id: 'TOR', city: 'Toronto', name: 'Blue Jays'},
                    {id: 'n/a', city: '', name: ''}
                ]);
        });
};
