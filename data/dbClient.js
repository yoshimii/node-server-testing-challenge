const knex = require('knex')
const knexConfig = require('../knexfile')

const env = process.env.NODE_ENV || 'development'

console.log('ENV', env)

module.exports = knex(knexConfig[env])