const router = require("express").Router();
const Users = require("./users-model");

// GET ALL USERS
router.get("/", async (req, res, next) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

// GET ONE USER
router.get("/:id", async (req, res, next) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

// UPDATE USER
router.put("/:id", async (req, res, next) => {
  Users.update(req.params.id, req.body)
    .then((user) => {
      if(user){
        res.status(200).json(user);
      }else{
        res.json({message:"there are no user with that id to update"})
      }
    })
    .catch(next);
});

module.exports = router;
