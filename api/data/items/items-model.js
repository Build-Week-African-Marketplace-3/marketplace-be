const db = require("../db-config");

function findAllItems(){
    return db('items')
}

function findItemsForUser(user_id){
    return db('items').where({user_id})
}

function findBy(filter){
    return db('items').where(filter).first()
}
function findById(item_id){
    return db('items').where('item_id', item_id)
}
function addItem(user_id, item){
    return db('items')
    .insert({
        ...item,
        user_id
    })
    .then(()=>{
        return db('items')
        .join('users', 'users.id','items.user_id')
        .select('item_id','items.name','items.price','items.description','items.image','users.name','users.location')
        .orderBy('items_id','desc')
        .where('users.id', user_id)
    })
}

function updateItem(changes, item_id) {
    return db('items')
      .where('item_id', item_id)
      .update(changes)
      .then(count => {
        return findById(item_id)
      })
  }

async function removeItem(item_id){
    const result = await db('items').where({item_id}).first()
    const removed= await db('items').where('item_id',item_id).del()
    return result
   
    // return db('items').where({item_id}).del()
      
}

module.exports = {
    findAllItems, findBy, findById, findItemsForUser, addItem, updateItem, removeItem
}