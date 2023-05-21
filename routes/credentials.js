const {Router} = require('express');
const {
    credentialsCreatePost,
    credentialsLogin
} = require ('../controllers/credentials');
const router = Router();
router.post('/', credentialsCreatePost);
router.post('/login', credentialsLogin);
module.exports = router;