const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthController');
// const { verifyToken } = require('../middleware/auth');


router.post('/register/', AuthController.register);
router.post('/login/', AuthController.login);
router.post('/verify', AuthController.verifyToken);
// router.get('/profile', verifyToken, AuthController.profile);

// router.get('/logout', verifyToken, AuthController.logout);
// router.get('/refresh', verifyToken, AuthController.refreshToken);



module.exports = router;