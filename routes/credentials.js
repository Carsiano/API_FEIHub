const {Router} = require('express');
const {
    credentialsCreatePost,
    credentialsLogin,
    usernameUpdatePut
} = require ('../controllers/credentials');
const router = Router();
router.post('/', credentialsCreatePost);
router.post('/login', credentialsLogin);
router.put('/:username', usernameUpdatePut);
module.exports = router;