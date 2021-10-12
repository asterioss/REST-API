//Initialize express router (using express)
const router = require('express').Router();
const User = require('../models/User');

//Get all users from database
router.get('/', async (req, res) => {
    /*res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTAPI by Asterios!'
    });*/

    try {
      const users = await User.find();
      res.json(users);
    } catch {
      res.json({message : "Error"});
    } 
});

//Add a user in database
router.post('/', async (req, res) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name
    });

    try {
      const newuser = await user.save();
      res.json(newuser);
    } catch {
      res.json({message : "Error"});
    } 
});

//Get a specific user from database
router.get('/:userID', async (req, res) => {
    try {
      const user = await User.findById(req.params.userID);
      res.json(user);
    } catch {
      res.json({message : "Error"});
    } 
});

//Delete a specific user from database
router.delete('/:userID', async (req, res) => {
  try {
    const deleteduser = await User.remove({_id: req.params.userID});
    res.json(deleteduser);
  } catch {
    res.json({message : "Error"});
  } 
});

//Update a specific post in database
router.patch('/:userID', async (req, res) => {
  try {
    const updateduser = await User.updateOne({_id: req.params.userID}, {$set: {name: req.body.name}});
    res.json(updateduser);
  } catch {
    res.json({message : "Error"});
  } 
});

//Export API routes
module.exports = router;