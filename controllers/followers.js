const {response} = require('express');
const followersDAO = require('../dao/followersDAO');
const { use } = require('../routes/followers');

const addNewFollowPost = async (req, res = response) => {
    const { follower, following } = req.body;
    const followers = { follower, following };
    try {
      const newFollow = await followersDAO.addNewFollow(followers);
      res.status(201).json(newFollow);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.toString() });
    }
};

const listFollowers = async (req, res = response) => {
    const username = req.params.username;
    try {
        const followers = await followersDAO.listUserFollowers(username);
        res.status(200).json(followers);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        message: "We couldn't get your followers, try again later.",
        error: error.toString(),
        });
    }
};

const listFollowing = async (req, res = response) => {
    const username = req.params.username;
    try {
        const followers = await followersDAO.listUserFollowing(username);
        res.status(200).json(followers);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        message: "We couldn't get who you follow, try again later.",
        error: error.toString(),
        });
    }
};

const deleteFollow = async (req, res = response) => {
    const { follower, following } = req.params;
    try {
        await followersDAO.deleteFollow(follower, following);
        res
        .status(200)
        .json({ message: `You have unfollowed ${following}` });
    } catch (error) {
        console.error(error);
        res
        .status(500)
        .json({ message: `Failed to unfollow ${following}`, error });
    }
};
module.exports = {
    addNewFollowPost,
    listFollowers,
    listFollowing,
    deleteFollow
};
