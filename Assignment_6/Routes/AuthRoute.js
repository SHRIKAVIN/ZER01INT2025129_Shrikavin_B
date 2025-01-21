const express = require('express');
const router = express.Router();
const User = require('../DataModels/UserModel');

router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
