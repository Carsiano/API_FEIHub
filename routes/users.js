const express = require('express');
const {
    createUserPost,
    userByUsernameGet,
    userUpdatePut,
    userUpdateProfilePhotoPatch
} = require('../controllers/users');
const { validateJWT } = require('../middlewares/validationJWT');
const router = express.Router();

router.get('/',[validateJWT], userByUsernameGet); 
router.post('/',[validateJWT], createUserPost);
router.put('/:username',[validateJWT], userUpdatePut);
router.patch('/:username',[validateJWT], userUpdateProfilePhotoPatch);

module.exports = router;
