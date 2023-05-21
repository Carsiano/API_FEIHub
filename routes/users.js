const express = require('express');
const {
    createUserPost,
    userByUsernameGet,
    userUpdatePut,
    userUpdateProfilePhotoPatch
} = require('../controllers/users');

const router = express.Router();

router.get('/', userByUsernameGet); 
router.post('/', createUserPost);
router.put('/:username', userUpdatePut);
router.patch('/:username', userUpdateProfilePhotoPatch);

module.exports = router;
