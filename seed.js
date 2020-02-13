const axios = require("axios");
const Haiku = require("./models/Haiku");
const User = require("./models/User");
const Library = require("./models/Library");
const constructLibrary = require("./externalAPI");

let environment;
if (process.env.NODE_ENV === "production") {
  environment = "guesswhohaiku.herokuapp.com";
} else {
  environment = "localhost:5000";
}

async function seedDB() {
  let demoUser = await User.findOne({username: 'Demolicious'});

  let lastSeedDate = Math.floor(Date.parse(demoUser.dateCreated) / 86400000);
  let currentDate = Math.floor(Date.now() / 86400000);
  let dateDiff = currentDate - lastSeedDate;

  if (dateDiff < 30) {
    return;
  }

  //seed author library
  // await Library.deleteMany({});
  // await constructLibrary();

  try {
    //clear DB except library
    await User.deleteMany({});
    await Haiku.deleteMany({});

    //create new users
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "Demolicious",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "FunkyFresh",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "SarahJ",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "TatianaF",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "AlexS",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "EddieX",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "EzraPound",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "LimeRick",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "WillyShakes",
      password: "password"
    });
    await axios.post(`http://${environment}/api/users/signup`, {
      username: "SoliloGuy",
      password: "password"
    });

    //get created users and update score
    let demo = await User.findOne({ username: "Demolicious" });
    demo.score = 29483;
    demo.save();
    let ff = await User.findOne({ username: "FunkyFresh" });
    ff.score = 32758;
    ff.save();
    let sj = await User.findOne({ username: "SarahJ" });
    sj.score = 23120;
    sj.save();
    let tf = await User.findOne({ username: "TatianaF" });
    tf.score = 19327;
    tf.save();
    let as = await User.findOne({ username: "AlexS" });
    as.score = 17086;
    as.save();
    let ex = await User.findOne({ username: "EddieX" });
    ex.score = 17086;
    ex.save();
    let ep = await User.findOne({ username: "EzraPound" });
    ep.score = 15593;
    ep.save();
    let lr = await User.findOne({ username: "LimeRick" });
    lr.score = 12907;
    lr.save();
    let ws = await User.findOne({ username: "WillyShakes" });
    ws.score = 5657;
    ws.save();
    let sg = await User.findOne({ username: "SoliloGuy" });
    sg.score = 226;
    sg.save();

    //generate new haikus
    let haiku1 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Kanye+West&author2=Donald+Trump`
    );
    let haiku2 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Rick+and+Morty&author2=Donald+Trump`
    );
    let haiku3 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Game+of+Thrones&author2=Donald+Trump`
    );
    let haiku4 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Barack+Obama&author2=Donald+Trump`
    );
    let haiku5 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Jane+Austen&author2=Barack+Obama`
    );
    let haiku6 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Kanye+West&author2=Barack+Obama`
    );
    let haiku7 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Kanye+West&author2=Barack+Obama&author3=Homer+Simpson`
    );
    let haiku8 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Otto&author2=Abe+Simpson&author3=Homer+Simpson`
    );
    let haiku9 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Kanye+West&author2=Barack+Obama&author3=Jane+Austen`
    );
    let haiku10 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Game+of+Thrones&author2=Barack+Obama&author3=Bart+Simpson`
    );
    let haiku11 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Frank+Grimes&author2=Rick+and+Morty&author3=Mr+Burns`
    );
    let haiku12 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Game+of+Thrones`
    );
    let haiku13 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Donald+Trump`
    );
    let haiku14 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Jane+Austen`
    );
    let haiku15 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Barack+Obama`
    );
    let haiku16 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Frank+Grimes`
    );
    let haiku17 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Homer+Simpson`
    );
    let haiku18 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Kanye+West`
    );
    let haiku19 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Kanye+West`
    );
    let haiku20 = await axios.get(
      `http://${environment}/api/haikus/new?author1=Kanye+West`
    );

    //save generated haikus with various creators
    let savedHaiku1 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku1.data,
        creator: demo._id
      }
    );
    let savedHaiku2 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku2.data,
        creator: demo._id
      }
    );
    let savedHaiku3 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku3.data,
        creator: demo._id
      }
    );
    let savedHaiku4 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku4.data,
        creator: demo._id
      }
    );
    let savedHaiku5 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku5.data,
        creator: ff._id
      }
    );
    let savedHaiku6 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku6.data,
        creator: ep._id
      }
    );
    let savedHaiku7 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku7.data,
        creator: lr._id
      }
    );
    let savedHaiku8 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku8.data,
        creator: ws._id
      }
    );
    let savedHaiku9 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku9.data,
        creator: sg._id
      }
    );
    let savedHaiku10 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku10.data,
        creator: sj._id
      }
    );
    let savedHaiku11 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku11.data,
        creator: tf._id
      }
    );
    let savedHaiku12 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku12.data,
        creator: ex._id
      }
    );
    let savedHaiku13 = await axios.post(
      `http://${environment}/api/haikus/create`,
      {
        body: haiku13.data,
        creator: demo._id
      }
    );

    //share demo's haikus
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku1.data._id,
      recipientIds: [ff._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku2.data._id,
      recipientIds: [tf._id, ws._id, sg._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku3.data._id,
      recipientIds: [lr._id, ff._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku4.data._id,
      recipientIds: [ep._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku12.data._id,
      recipientIds: [sg._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku13.data._id,
      recipientIds: [ws._id]
    });

    // share haikus with demo
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku5.data._id,
      recipientIds: [demo._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku6.data._id,
      recipientIds: [demo._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku7.data._id,
      recipientIds: [demo._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku8.data._id,
      recipientIds: [demo._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku9.data._id,
      recipientIds: [demo._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku10.data._id,
      recipientIds: [demo._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku11.data._id,
      recipientIds: [demo._id]
    });
    await axios.post(`http://${environment}/api/shares/`, {
      haikuId: savedHaiku12.data._id,
      recipientIds: [demo._id]
    });

    } catch (error) {
    console.log("seed error", error)
  }
}

module.exports = seedDB;