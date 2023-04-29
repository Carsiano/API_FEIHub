const { Users } = require ('../models');
class UsersDAO {
    static async createUserStudent (user){
        return await Users.create(user);
    }
    static async createUserAcademic (user){
        return await Users.create(user);
    }
    static async updateUser (username, user){
        const [rows, [updatedUser]] = await Users.update(user, {where: {id}, returning:true});
        return updatedUser;
    }
}

module.exports = UsersDAO;