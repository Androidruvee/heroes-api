const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let heroesArray = [
  {id:1,name:'SuperMan'},
  {id:2,name:'Batman'},
  {id:3,name:'SuperWoman'}
];


//GET METHOD

app.get ('/', (req,res) =>{
  res.send("Avengers Access")
});


app.get('/api/heroes',(req, res) => {

 // let heroes = ['Captain America', 'Iron Man', 'Arrow'];
  res.send(heroesArray);

});


/*app.get('/api/heroes/1',(req,res) =>{

  let hero = {id: 1, name: "Captain America"}
  res.send(hero);
});

app.get('/api/heroes/2',(req,res) =>{

  let hero = {id: 2, name: "Iron Man"}
  res.send(hero);
});

app.get('/api/heroes/3',(req,res) =>{

  let hero = {id: 3, name: "Arrow"}
  res.send(hero);
}); */

//////////creating automatic api calls

/*app.get('/api/heroes/:heroId',(req,res) =>{

  let heroId = req.params.heroId; //request parameter

  let optionalValue = req.query.showMore;  //query parameters

 // res.send("You requested for hero Id :"  + heroId + "and optional value :" + optionalValue )

 res.send("You requested for hero Id :"  + heroId);
  
});*/




app.get('/api/heroes/:heroId',(req,res) =>{

  let heroId = parseInt(req.params.heroId);
  let hero = heroesArray.find(h => h.id === heroId); //=== equals means type and value is same checking

  if (!hero) {
    res.status(404).send("The Given Id does not exisi on our Server");
  } 

  res.send(hero);
  
});

app.post('/api/heroes', (req,res) => {

  if(!req.body.heroName) {
   return res.status(400).send("Not All Mandatory values have been set!");

  }

 let newHeroobj = {
   id: heroesArray.length + 1,
   name:req.body.heroName

 };

 heroesArray.push(newHeroobj);
 console.log.apply(heroesArray);

 res.send(newHeroobj);

});

app.put('/api/heroes/:heroId', (req,res)=>{

  let heroId = parseInt(req.params.heroId);
  let hero = heroesArray.find(h => h.id === heroId);
  if (!hero) {
    res.status(404).send("The Given Id does not exisi on our Server");
  } 

  if(!req.body.heroName){

    res.status(404).send("The Given Id does not exisi on our Server");
  }
  hero.name = req.body.heroName;
  console.log(heroesArray);
  res.send(hero);

})

app.delete('/api/heroes/:heroId', (req,res) => {
  let heroId = parseInt(req.params.heroId);
  let hero = heroesArray.find(h => h.id === heroId);

  if (!hero) {

    return res. status(404).send("The give Id doen't exist on our server");
  }
  let indexofHero = heroesArray.indexof(hero);
  heroesArray.splice(indexofHero,1);

  res.send(hero);

});


app.listen(PORT, function() {
  console.log("Listening on Port : "+ PORT);

});

//DELETE METHOD
// Find hero with heroID to delete
//-Splice









/*app.get('/', function (req, res) {
    res.send('Hello World'); //old
  })*/

  /*function funtionname (param1, param2){
    //code old
  }) */

  /*functionname = (param1,param2) => {
    //code
  } */


/*app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/dogs', (req, res) => {
      var dogArray= ['Dog 1', 'Dog 2'];
    res.send(dogArray);
  })

  app.get('/cats', (req, res) => {
    var cat=({name: 'Persian cat', type: 'Furry'});
    res.send(cat);
  })
   
  app.listen(PORT, () =>{
    console.log("Listening on Port : "+ PORT);

  });*/