const {response} = require('express');
const usersDAO = require('../dao/UsersDAO');
const { use } = require('../routes/users');

const createUserPost = async (req, res = response) => {
    const { username, name, paternalSurname, maternalSurname, schoolId, educationalProgram, rol } = req.body;
  
    switch (rol) {
      case 'STUDENT':
        const userStudent = { username, name, paternalSurname, maternalSurname, schoolId, educationalProgram };
        try {
          const existingUser = await usersDAO.findUserByUsername(username);
          if (existingUser) {
            res.status(400).json({ message: 'The user already exists' });
          } else {
            const newUserStudent = await usersDAO.createUserStudent(userStudent);
            res.status(201).json(newUserStudent);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "We were unable to create the user, try again later", error });
        }
        break;
  
      case 'ACADEMIC':
        const userAcademic = { username, name, paternalSurname, maternalSurname };
        try {
          const existingUser = await usersDAO.findUserByUsername(username);
          if (existingUser) {
            res.status(400).json({ message: 'The user already exists' });
          } else {
            const newUserAcademic = await usersDAO.createUserAcademic(userAcademic);
            res.status(201).json(newUserAcademic);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "We were unable to create the user, try again later",error });
        }
        break;
  
      default:
        res.status(400).json({ message: 'Invalid role' });
    }
  };
  
const userByUsernameGet = async (req, res = response ) =>{
    const {username} = req.params;
    try{
        const user = await usersDAO.findUserByUsername(username);
        res.status(200).json(user);
    }catch (error){
        console.error(error);
        res.status(500).json({message:error});
    }
}
const similarUserByUsernameGet = async (req, res = response ) =>{
  const {username} = req.params;
  try{
      const users = await usersDAO.findSimilarUsersByUsername(username);
      res.status(200).json(users);
  }catch (error){
      console.error(error);
      res.status(500).json({message:error});
  }
}
const userUpdatePut = async (req, res = response) => {
    const {username} = req.params;
    const { name, paternalSurname, maternalSurname, profilePhoto} = req.body;
    const user = { name, paternalSurname, maternalSurname, profilePhoto };
    try {
      const updatedUser = await usersDAO.updateUser(username, user);
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "There was an error updating your profile, try again later.", error });
    }
}
const userUpdateProfilePhotoPatch = async (req, res = response) => {
    const {username} = req.params;
    const { profilePhotoLink } = req.body;
    try {
      const updatedPhoto = await usersDAO.updateProfilePhoto(username, profilePhotoLink);
      res.status(200).json(updatedPhoto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "There was an error updating your profile picture, try again later.", error });
    }
}
module.exports = {
    createUserPost,
    userByUsernameGet,
    userUpdatePut,
    userUpdateProfilePhotoPatch,
    similarUserByUsernameGet
};

