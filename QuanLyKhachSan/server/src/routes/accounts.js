const express = require('express');
const router = express.Router();

// controllers
const accountsAPI = require('../app/controllers/AccountsAPI');
// middlewares
const verifyToken = require('../app/middlewares/verifyToken');

router.get('/verify', verifyToken, (req, res) => {
    res.json(!!req.account._id);
});
router.post('/refreshToken', accountsAPI.refreshToken);
router.post('/reset-password', verifyToken, accountsAPI.resetPassword);
router.post('/login', accountsAPI.login);
router.post('/register', accountsAPI.register);

module.exports = router;
