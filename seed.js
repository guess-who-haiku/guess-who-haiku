const axios = require("axios");
const Haiku = require("./models/Haiku");
const User = require("./models/User");
const bcrypt = require('bcryptjs');


async function seedDB() {
    try {
        await User.deleteMany({})
        // await Haiku.deleteMany({})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'demolicious',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'funkyfresh',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test1',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test2',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test3',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test4',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test5',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test6',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test7',
          password: 'password'})
        await axios.post('http://localhost:5000/api/users/signup', {username: 'test8',
          password: 'password'})
        
        
        
    } catch (error) {
        console.log("seed error", error)
    }
}



module.exports = seedDB;
                  