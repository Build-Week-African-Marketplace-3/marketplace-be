const db = require('../data/db-config');

function find() {
    return db('users')
        .select('user_id', 'username')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users')
        .where('user_id', id).first()
}

async function add(user) {
    const id = await db('users').insert(user, 'user_id')

    return findById(id[0])
}

async function update(id, changes){
    await db('users')
    .where('user_id', id)
    .update(changes)
    return findById(id)
  }

module.exports = {
    add,
    find,
    findBy,
    update,
    findById
}