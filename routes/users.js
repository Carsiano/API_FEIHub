const express = require('express');
const {
    createUserPost,
    userByUsernameGet,
    userUpdatePut,
    userUpdateProfilePhotoPatch,
    similarUserByUsernameGet
} = require('../controllers/users');
const { validateJWT } = require('../middlewares/validationJWT');
const router = express.Router();

router.get('/:username', userByUsernameGet); 
router.get('/findUsers/:username', similarUserByUsernameGet); 
router.post('/', createUserPost);
router.put('/:username',[validateJWT], userUpdatePut);
router.patch('/:username',[validateJWT], userUpdateProfilePhotoPatch);

module.exports = router;
