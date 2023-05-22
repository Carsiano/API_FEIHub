const { response } = require('express');
const crypto = require('crypto');
const credentialsDAO = require('../dao/credentialsDAO');

const hash = async (text) => {
  const hash = crypto.createHash('sha256');
  hash.update(text);
  return hash.digest('hex');
}

const credentialsCreatePost = async (req, res = response) => {
  const { username, password, email, rol } = req.body;
  const pass = await hash(password);
  try {
    const credentials = { username, password: pass, email, rol };
    const newCredentials = await credentialsDAO.createUserCredentials(credentials);
    res.status(201).json(newCredentials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

const credentialsLogin = async (req, res = response) => {
  const { username, password } = req.body;
  const pass = await hash(password);
  try {
    const credentials = await credentialsDAO.findCredentialsByUsernamePassword(username, pass);
    res.json({
      username: credentials.username,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Verify your access credentials" });
  }
}
const usernameUpdatePut = async (req, res = response) => {
  const {username} = req.params;
  const { usernameModified } = req.body;
  try {
    const credentials = await credentialsDAO.updateUsername(username, usernameModified);
    res.status(200).json({
      username: credentials.username,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error updating your profile, try again later." });
  }
}


module.exports = {
  credentialsCreatePost,
  credentialsLogin,
  usernameUpdatePut
};
