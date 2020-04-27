exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary().unsigned()
    table.string('name').notNullable()
    table.string('email').unique()
    table.string('password').notNullable()
    table.timestamp('createDate').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
