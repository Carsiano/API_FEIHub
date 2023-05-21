const { Router } = require('express');
const {
    addNewFollowPost,
    listFollowers,
    listFollowing,
    deleteFollow
} = require ('../controllers/followers')
const router = Router();

router.get('/followers/:username', listFollowers);
router.get('/following/:username', listFollowing);
router.post('/', addNewFollowPost);
router.delete('/:follower/:following', deleteFollow); 
module.exports = router;
