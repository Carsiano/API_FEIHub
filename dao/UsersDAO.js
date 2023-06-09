const { users } = require ('../models');
class UsersDAO {
    static async createUserStudent (user){
        return await users.create(user);
    }
    static async createUserAcademic (user){
        return await users.create(user);
    }
    static async updateUser (username, user){
        const updatedUser = await users.update(user, { where: { username } });
        return updatedUser;
    }
    static async findUserByUsername(username) {
        return await users.findByPk(username);
    }
    static async updateProfilePhoto(username, profilePhoto){
        const updatedUser = await users.update({profilePhoto : profilePhoto}, { where: { username } });
        return updatedUser;
    }
}

module.exports = UsersDAO;