
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('answers', function(table) {
    table.increments('id').primary().unsigned()
    table.string('text').notNullable()
    table.string('user').notNullable()
    table.timestamp('createDate').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('answers')
};
