const axios = require("axios");
const Haiku = require("./models/Haiku");
const User = require("./models/User");

const environment = "localhost:5000";
// const environment = "guesswhohaiku.herokuapp.com";

async function seedDB() {
    try {
        await User.deleteMany({})// await Haiku.deleteMany({})
        await axios.post(`http://${environment}/api/users/signup`, {username: 'demolicious',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'funkyfresh',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test1',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test2',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test3',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test4',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test5',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test6',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test7',
          password: 'password'});
        await axios.post(`http://${environment}/api/users/signup`, {username: 'test8',
          password: 'password'});
        
        let haiku1 = await axios.get(`http://${environment}/api/haikus/new?author1=Kanye+West&author2=Donald+Trump`);
        let haiku2 = await axios.get(`http://${environment}/api/haikus/new?author1=Rick+and+Morty&author2=Donald+Trump`);
        let haiku3 = await axios.get(`http://${environment}/api/haikus/new?author1=Game+of+Thrones&author2=Donald+Trump`);
        let haiku4 = await axios.get(`http://${environment}/api/haikus/new?author1=Barack+Obama&author2=Donald+Trump`);
        let haiku5 = await axios.get(`http://${environment}/api/haikus/new?author1=Jane+Austen&author2=Barack+Obama`);
        let haiku6 = await axios.get(`http://${environment}/api/haikus/new?author1=Kanye+West&author2=Barack+Obama`);
        let haiku7 = await axios.get(`http://${environment}/api/haikus/new?author1=Kanye+West&author2=Barack+Obama&author3=Homer+Simpson`);
        let haiku8 = await axios.get(`http://${environment}/api/haikus/new?author1=Otto&author2=Abe+Simpson&author3=Homer+Simpson`);
        let haiku9 = await axios.get(`http://${environment}/api/haikus/new?author1=Kanye+West&author2=Barack+Obama&author3=Jane+Austen`);
        let haiku10 = await axios.get(`http://${environment}/api/haikus/new?author1=Game+of+Thrones&author2=Barack+Obama&author3=Bart+Simpson`);
        let haiku11 = await axios.get(`http://${environment}/api/haikus/new?author1=Frank+Grimes&author2=Rick+and+Morty&author3=Mr+Burns`);
        let haiku12 = await axios.get(`http://${environment}/api/haikus/new?author1=Game+of+Thrones`);
        let haiku13 = await axios.get(`http://${environment}/api/haikus/new?author1=Donald+Trump`);
        let haiku14 = await axios.get(`http://${environment}/api/haikus/new?author1=Jane+Austen`);
        let haiku15 = await axios.get(`http://${environment}/api/haikus/new?author1=Barack+Obama`);
        let haiku16 = await axios.get(`http://${environment}/api/haikus/new?author1=Frank+Grimes`);
        let haiku17 = await axios.get(`http://${environment}/api/haikus/new?author1=Homer+Simpson`);
        let haiku18 = await axios.get(`http://${environment}/api/haikus/new?author1=Kanye+West`);
        let haiku19 = await axios.get(`http://${environment}/api/haikus/new?author1=Kanye+West`);
        let haiku20 = await axios.get(`http://${environment}/api/haikus/new?author1=Kanye+West`);

        //save these haikus

        //share these haikus

        //solve some for demolicious

        // { body, creator, usersSharedWith } = req.body;

        //manually edit score for some users through mongoose instead of axios
        
    } catch (error) {
        console.log("seed error", error)
    }
}



module.exports = seedDB;
                  