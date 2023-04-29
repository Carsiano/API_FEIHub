const { Credentials } = require ('../models');
class CredentialsDAO {
    static async createUserCredentials (userCredentials){
        return await Credentials.create(userCredentials);
    }
}
module.exports = CredentialsDAO;