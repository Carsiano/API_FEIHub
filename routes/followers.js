const { Router } = require('express');
const {
    addNewFollowPost,
    listFollowers,
    listFollowing,
    deleteFollow
} = require ('../controllers/followers')
const router = Router();
const { validateJWT } = require('../middlewares/validationJWT');
router.get('/followers/:username',[validateJWT], listFollowers);
router.get('/following/:username',[validateJWT], listFollowing);
router.post('/',[validateJWT], addNewFollowPost);
router.delete('/:follower/:following',[validateJWT], deleteFollow); 
module.exports = router;
