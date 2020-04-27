exports.up = function(knex) {
  return knex.schema.createTable('answers', function(table) {
    table.increments('id').primary().unsigned()
    table.integer('question_id').notNullable()
    table.string('text').notNullable()
    table.string('user').notNullable()
    table.timestamp('createDate').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('answers')
};
