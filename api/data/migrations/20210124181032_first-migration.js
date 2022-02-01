exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('id');
      users.string('name', 200).notNullable();
      users.string('username', 200).notNullable().unique();
      users.string('password', 200).notNullable();
      users.string('location', 200).notNullable();
    })
    .createTable('items', (items)=>{
      items.increments('item_id');
      items.string('name', 200).notNullable();
      items.string('description', 200).notNullable();
      items.string('price', 200).notNullable();
      items.string('image');
      items.integer('user_id')
      .references('id')
      .inTable('users')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT')
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('items');
  await knex.schema.dropTableIfExists('users')
}
