//Initialize express router (using express)
const router = require('express').Router();
const User = require('../models/User');

//Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTAPI by Asterios!'
    });
});

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

//Export API routes
module.exports = router;