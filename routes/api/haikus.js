const express = require("express");
const router = express.Router();
const passport = require("passport");

const Haiku = require("../../models/Haiku");
const User = require("../../models/User");

const MarkovUtil = require("../../markov");


function getAuthorSelection(authors) {

  /* to be replaced by actual final library object */
  const library = {
  
  "jane austen":
    'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters. My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?" Mr. Bennet replied that he had not. "But it is," returned she; "for Mrs. Long has just been here, and she told me all about it." Mr. Bennet made no answer. "Do you not want to know who has taken it?" cried his wife impatiently. "YOU want to tell me, and I have no objection to hearing it. " This was invitation enough. "Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four tosee the place, and was so much delighted with it, that he agreedwith Mr. Morris immediately; that he is to take possessionbefore Michaelmas, and some of his servants are to be in thehouse by the end of next week." "What is his name?" "Bingley." "Is he married or single?" "Oh! Single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!" "How so? How can it affect them?" "My dear Mr. Bennet," replied his wife, "how can you be so tiresome! You must know that I am thinking of his marrying one of them." "Is that his design in settling here?" "Design! Nonsense, how can you talk so! But it is very likely that he MAY fall in love with one of them, and therefore you must visit him as soon as he comes." "I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley may like you the best of the party." "My dear, you flatter me.',
  "barack obama":
    "On behalf of the great state of Illinois, crossroads of a nation, Land of Lincoln, let me express my deepest gratitude for the privilege of addressing this convention. Tonight is a particular honor for me because, let’s face it, my presence on this stage is pretty unlikely. My father was a foreign student, born and raised in a small village in Kenya. He grew up herding goats, went to school in a tin-roof shack. His father -- my grandfather -- was a cook, a domestic servant to the British. But my grandfather had larger dreams for his son. Through hard work and perseverance my father got a scholarship to study in a magical place, America, that shone as a beacon of freedom and opportunity to so many who had come before. While studying here, my father met my mother. She was born in a town on the other side of the world, in Kansas. Her father worked on oil rigs and farms through most of the Depression. The day after Pearl Harbor my grandfather signed up for duty; joined Patton’s army, marched across Europe. Back home, my grandmother raised a baby and went to work on a bomber assembly line. After the war, they studied on the G.I. Bill, bought a house through F.H.A., and later moved west all the way to Hawaii in search of opportunity. And they, too, had big dreams for their daughter. A common dream, born of two continents. My parents shared not only an improbable love, they shared an abiding faith in the possibilities of this nation. They would give me an African name, Barack, or ”blessed,” believing that in a tolerant America your name is no barrier to success. They imagined -- They imagined me going to the best schools in the land, even though they weren’t rich, because in a generous America you don’t have to be rich to achieve your potential. They're both passed away now. And yet, I know that on this night they look down on me with great pride. They stand here, and I stand here today, grateful for the diversity of my heritage, aware that my parents’ dreams live on in my two precious daughters. I stand here knowing that my story is part of the larger American story, that I owe a debt to all of those who came before me, and that, in no other country on earth, is my story even possible. Tonight, we gather to affirm the greatness of our Nation -- not because of the height of our skyscrapers, or the power of our military, or the size of our economy. Our pride is based on a very simple premise, summed up in a declaration made over two hundred years ago.", 
  "donald trump":
    "Now the Radical Left, Do Nothing Democrats, are asking Mitch McConnell to do the job that they were unable to do. They proved NOTHING but my total innocence in the House, despite the most unfair & biased hearings in the history of Congress. Now they demand fairness! New polling shows that the totally partisan Impeachment Hoax is going nowhere. A vast majority want the Do Nothing Democrats to move on to other things now! The noble people of Iran—who love America—deserve a government that's more interested in helping them achieve their dreams than killing them for demanding respect. Instead of leading Iran toward ruin, its leaders should abandon terror and Make Iran Great Again! 95% Approval Rating in the Republican Party, A Record. Thank You! John Kerry got caught essentially admitting that funds given ridiculously to Iran were used to fund attacks on the USA. Only a complete fool would have given that 150 Billion Dollars Plus to Iran. They then went on a Middle East Rampage! I will NEVER allow our great Second Amendment to go unprotected, not even a little bit! Another Fake Book by two third rate Washington Post reporters, has already proven to be inaccurately reported, to their great embarrassment, all for the purpose of demeaning and belittling a President who is getting great things done for our Country, at a record clip. Thank you! I was thrilled to be back in the Great State of Texas tonight, where the people are known for being tough, strong, hardworking, loyal and fiercely patriotic — just like America’s incredible Farmers! It’s a privilege to be here at this forum an business and science diplomacy and people from world affairs gathered for many, many years to discuss how we can to advance prosperity and peace. I'm here to represent the interests of the America people and affirm America's friendship and partnership in building a better world. Like all nations represented at this great forum, America hopes for a future which everyone can prosper and every child can grow up free from violence, poverty, and fear. Over the past year, we have made extraordinary strides in the U.S. We're lifting up forgotten communities, creating exciting new opportunities, and helping every American find their path to the American dream. The dream of a great job, a safe home and a better life for their children. After years stagnation the nights is once again experiencing strong economic growth. The stock market is smashing one record after another, and has added more than $7 trillion in new wealth since my election. Consumer confidence, business confidence, and manufacturing confidence are the highest that they have been in many decades. Since my election we've created 2.4 million jobs and that number is going up very, very substantially. Small business optimism is at an all-time high. New unemployment claims are near the lowest we've seen in almost half a century. African-American unemployment reached the lowest rate ever recorded in the United States and so has unemployment among Hispanic-Americans. The world is witnessing the resurgence of a strong and prosperous America. I'm here to deliver a simple message. There has never been a better time to hire, to build, to invest and to grow in the united States. America is open for business and we are competitive once again. The American economy is by far the largest in the world and we've just enacted the most significant tax cuts and reform in American history. We've massively cut taxes for the middle class, and small businesses to let working families keep more of their hard earned money. We lowered our corporate tax rate from 35 percent all the way down to 21 percent. As a result, millions of workers have received tax cut bonuses from their employers in amounts as large as $3,000. The tax cut bill is expected to raise the average American's household income by more than $4,000. The world's largest company, apple, announced it plans to bring $245 billion in overseas profits home to America. Their total investment into the United States economy will be more than $350 billion over the next five years. Now is the perfect time to bring your business, your jobs, and your investments to the United States. This is especially true because we have undertaken the most extensively regulatory reduction ever conceived. Regulation is stealth taxation. The U.S. Like many other countries unelected bureaucrats, we have, believe me, we have them all over the place, and they have imposed crushing and anti-business and anti-worker regulations on our citizens with no vote, no legislative debate, and no real accountability. In America those days are over. I pledged to eliminate two unnecessary regulations for everyone new regulation. We have succeeded beyond our highest expectations. Instead of two for one, we have cut 22 burdensome regulations for everyone new rule. We are freeing our businesses and workers so they can thrive and flourish as never before. We are creating an environment that attracts capital, invites investment, and rewards production. America is the place to do business, so come to America where you can innovate, create and build. I believe in America. As president of the United States I will always put America first just like the leaders of other countries should put their country first also. But America first does not mean America alone. When the United States grows, so does the world. American prosperity has created countless jobs all around the globe and the drive for excellence, creativity, and innovation in the U.S. Has led to important discoveries that help people everywhere live more prosperous and far healthier lives. As the United States pursues domestic reforms to unleash jobs and growth, we are also working to reform the international trading system so that it promotes broadly-shared prosperity and rewards to those who pray -- play by the rules. We cannot have free and open trade if some countries exploit the system at the expense of others. We support free trade but it needs to be fair and it needs to be reciprocal because in the end unfair trade undermines us all. The United States will no longer turn a blind eye to unfair economic practices including massive intellectual property theft, industrial subsidies, and pervasive state-led economic planning. These and other predatory behaviors are distorting the global markets and harming businesses and workers not just in the U.S. But around the globe. Just like we expect the leaders of other countries to protect their interests, as president of the United States, I will always protect the interests of our country, our companies, and our workers. We will enforce our trade laws and restore integrity to our trading system. Only by insisting on fair and reciprocal trade can we create a system that works not just for the U.S., but for all nations.As I have said, the United States is prepared to negotiate mutually beneficial, bilateral trade agreements with all countries. This will include the countries within TPP, which are very important. We have agreements with several of them already. We would consider negotiating with the rest either individually or perhaps as a group if it is in the interests of all. My administration is also taking swift action in other ways to restore American confidence and independent. We are lifting self-imposed restrictions on energy production to provide affordable power to our citizens and businesses and to promote energy security for our friend all around the world. No country should be held hostage to a single provider of energy. America is roaring back and now is the time to invest in the future of America. We have dramatically cut taxes it make America competitive. We are eliminating burdensome regulations at a record pace. We are reforming the bureaucracy to make it lean, responsive and accountable and we are insuring our laws are enforced fairly. We have the best colleges and universities in the world and we have the best workers in the world. Energy is an abundant and affordable. There is never been a better time to do business in America. We are also making historic investments in the American military because we cannot have prosperity without security. To make the world safer from rogue regimes, terrorism and revisionist powers, we're asking our friend and allies to invest in their own defenses and to meet their financial obligations. Our common security requires everyone to contribute their fair share. My administration is proud to have led historic efforts at the united nations security council and all around the world to unite all civilized nations in our campaign of maximum pressure to de-nuke the Korean peninsula. We continue to call on partners to confront Iran's support for terrorists and block Iran's path to a nuclear weapon. We're also working with allies and partners to destroy jihad it terrorist organizations such as ISIS and very successfully so. The nights is leading a very, very broad coalition to deny terrorists control of their territory, to cut off their funding and to discredit their wicked ideology. I am pleased to the support that the coalition to defeat ISIS has retaken almost 100% of the territory once held by these killers in Iraq and Syria. There is still more fighting and worked to be done. And to consolidate our gains. We are committed to insuring that Afghanistan never again become as safe haven for terrorists who want to commit mass murder to our civilian populations."
  };


  /* goes through each others and returns a selection with just the authors */
  
  let selection = {};

  for (let author of authors) {
    selection[author] = library[author];
  }

  return selection;

}


// returns new haiku body based on the selections given, no save to db

router.get('/new',

  (req, res) => {

    const authors = Object.values(req.query); /* get authors from request  */

    // for each author, assemble a selection of authors from the library and construct the dictionary
    selection = getAuthorSelection(authors);
    selectionDicts = MarkovUtil.generateDictionaries(selection);
    
    // use the selection dictionaries to generate haiku lines
    let lines = MarkovUtil.generateLines(selectionDicts);

    /* return haiku body */
    res.json(lines);

  }
);

// returns haikus by user id

// router.get('/haikus',

//   (req, res) => {



//   }
// )


// returns haiku by haiku id

router.get("/:id",

  (req, res) => {
    Haiku.find({ _id: req.params.id })
      .then(haiku => res.json(haiku))
      .catch(err => res.status(404).json({ noHaikuError: "No haiku by that id exists" }))
  }
);


// creates new haiku based on the selections given, save to db

router.post('/create', 
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    let { body, creator, usersSharedWith } = req.body;

    //make the new haiku
    const newHaiku = new Haiku({
      creator: creator,
      body: body, 
      usersSharedWith: usersSharedWith
    })

    newHaiku
      .save()
      .then( haiku => {

        res.json(haiku)

          .then( res => {
            
            // let creatorId = res.req.body.creator;


          })
        
      })
      // .then((res) => {

      //   debugger;
      //   let creatorId = res.req.body.creator;

      //   // User.findByIdAndUpdate(creatorId, { haikusCreated: _id })
      //   //   .then(user => console.log(user));

      //   // console.log(res.req.body.creator)
      //   // // debugger;

      // });

  }

  //update the user record with haikus created
)



module.exports = router;