const { users } = require ('../models');
class UsersDAO {
    static async createUserStudent (user){
        return await users.create(user);
    }
    static async createUserAcademic (user){
        return await user.create(user);
    }
    static async updateUser (username, user){
        const updatedUser = await users.update(user, { where: { username } });
        return updatedUserer;
    }
    static async findUserById(username) {
        return await users.findByPk(username);
    }
}

module.exports = UsersDAO;