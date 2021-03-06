const db = require("../db-config");

async function find() {
  const allUsers = await db("users");
  const users = allUsers.map((user) => {
    const userTest = {
      id: user.id,
      name: user.name,
      username: user.username,
      location: user.location
    };
    return userTest;
  });
  return users;
}

async function findBy(filter) {
  const allUsers = await db("users").where(filter).orderBy("id");
  const users = allUsers.map((user) => {
    const userTest = {
      id: user.id,
      name: user.name,
      password: user.password,
      username: user.username,
      location: user.location
    };
    return userTest;
  });
  return users;
}

async function findById(id) {
  const [user] = await db("users")
    .where("id", id)
    .select("id", "name","username", "location");

  const items = await db('items')
  .orderBy('item_id','asc')
  .where("user_id", id)

  const userTest = {
    id: user.id,
    name: user.id,
    username: user.username,
    location: user.location,
    items_list: items
  };
  return userTest;
  
}

async function add(user) {
  const [u] = await db("users").insert(user, "id");
  return db("users")
  .where("id", u.id)
  .select("id", "name", "username", "location");
}

async function update(id, changes) {
  return db("users")
    .where("id", id)
    .update(changes)
    .then(count => {
      return findById(id)
    })
}

module.exports = { add, find, findBy, update, findById };
