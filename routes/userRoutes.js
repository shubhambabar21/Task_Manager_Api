const express = require('express');
const { getUserDetails, updateUserDetails } = require('../controllers/userController');
const authMiddleware = require('../midddleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware); 

router.get('/me', getUserDetails);
router.put('/me', updateUserDetails);

module.exports = router;
