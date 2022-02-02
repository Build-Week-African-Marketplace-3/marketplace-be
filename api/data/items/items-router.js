const router = require("express").Router();
const items = require('../items/items-model')

router.get('/', async (req, res, next) => {
    items.findAllItems()
    .then(all=>{
        res.status(200).json(all)
    })
    .catch(next)
    })
    
    router.get("/:user_id", async (req, res, next) => {
        items.findItemsForUser(req.params.user_id)
          .then((allUsersitems) => {
            res.status(200).json(allUsersitems);
          })
          .catch(next);
      });
    //
      router.post('/additem/:user_id',(req, res, next)=>{
        const item=req.body
        const {user_id}= req.params
        items.addItem(user_id,item)
            .then(allitemsByUser=>{
                res.status(201).json({message:"this user has items listed below",addedItem:allitemsByUser[0],allitemsByUser})
            })
            .catch(next)
    })
    
    router.put('/updateitem/:item_id', (req,res,next)=>{
        items.updateItem(req.body, req.params.item_id)
        .then((updateditem)=>{
            if(updateditem){
                res.status(200).json(updateditem)
            } else {
                res.json({message:"there are no item with that id to update"})
            }
        })
        .catch(next)
    })
    
    router.delete('/deleteitem/:item_id', (req, res, next)=>{
        const{item_id}=req.params
    
        items.removeItem(item_id)
        .then(p=>{
            if(p){
                res.json({message:`items_id ${item_id} is removed`, removed:p})
            }
            else{
                res.status(404).json({message:"Could not find any item with provided item_id"})
            }
        })
        .catch(next)
    })

      module.exports = router