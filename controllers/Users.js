const {response} = require('express');
const UsersDAO = require('../dao/UsersDAO');
async function createUserPost(req, res){
    const {username, name, paternalSurname, maternalSurname, schoolId, educationalProgram, rol} = req.body;
    const academic = 'ACADEMIC';
    if (rol == academic){
        const user = {username, name, paternalSurname, maternalSurname};
        try{
            const newUserAcademic = await UsersDAO.createUserAcademic(user);
            res.status(201).json(newUser);
        }catch(error){
            console.error(error);
            res.status(500).json({message: error})
        }
    }   
    else{
        const user = {username, name, paternalSurname, maternalSurname, schoolId, educationalProgram};
        try{
            const newUserStudent = await UsersDAO.createUserStudent(user);
            res.status(201).json(newUser);
        }catch(error){
            console.error(error);
            res.status(500).json({message: error})
        }
    }
}

