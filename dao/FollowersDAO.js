const { followers } = require ('../models');
class FollowersDAO{
    
    static async listUserFollowing(username){
        return await followers.findAll({where: {follower:username}})
    }
    static async listUserFollowers(username){
        return await followers.findAll({where: {following:username}})
    }
    static async addNewFollow(followers){
        return await followers.create(followers);
    }
    static async deleteFollow(follower, following) {
        return await followers.destroy({ where: { follower:follower, following:following } });
    }
}