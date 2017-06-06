module.exports = function(app){


  let candies = [
    {id: 1, name: "Chewing Gum" , color: "Red"   },
    {id: 2, name: "Pez"         , color: "Green" },
    {id: 3, name: "Marshmallow" , color: "Pink"  },
    {id: 4, name: "Candy Stick" , color: "Blue"  }
  ];
  //index
  app.get('/candies', (req, res)=> {
      res.json(candies);
  })
//show
  app.get('/candies/:id' ,(req, res)=> {
     const id = req.params.id;
     let candy1 = candies.filter((candy)=>{
       return candy.id == id;
     })
      res.json(candy1);
  })
//create
  app.post('/candies', (req, res) => {
    res.json({
       body: req.body
    })
    candies.push(req.body);
    res.json(candies);
  })

  /* PUT */
  app.put('/candies/:id' , (req,res)=> {
    const id = req.params.id;
    const color = req.body.color;
    const name = req.body.name;
    candies = candies.filter(function(candy1){
      if(candy1.id == id){
        candy1.color = color;
        candy1.id = id;
        candy1.name = name;
      }
      return candy1
    });
    res.json(candies);
  })


   app.delete('/candies/:id', (req, res)=> {
    const id = req.params.id;
    const color = req.body.id;

    candies = candies.filter((candy) =>{
      return candy.id != id && candy.color != color;
    });
     res.json(candies);
   });



}
