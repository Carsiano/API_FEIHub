const {response} = require('express');
const UsersDAO = require('../dao/UsersDAO');
async function createUser(req, res){
    const {username, password, email, rol, name, paternalSurname, maternalSurname, schoolId, educationalProgram} = req.body;
    const user = {username, password, email, rol};
    const academic = 'ACADEMIC';
    const student = 'STUDENT';
    if (rol == academic){
        
    }
}
