exports.up = function(knex) {
    return knex.schema.createTable('resource', tbl => {
        tbl.increments()
        tbl.timestamps(true, true)
        tbl.string('member', 64).notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resource')
  };
  