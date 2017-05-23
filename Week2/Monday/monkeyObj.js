var monkey= function(name,species,foodsEaten){
  var name=name;
  var species=species;
  var foodsEaten=foodsEaten;
  
  var foodArr=[];
  foodArr.push(foodsEaten);
  
 this.eatSomething= function(thingAsString){
    this.thingAsString=thingAsString;
    foodArr.push(thingAsString);
    
    console.log("Monkey "+ name + " is a :" + species + " that eats " + foodArr);
     
  }
  
  
  
  
  
}

var monkey1 =new monkey("timmy","chimpanzee","banana");
monkey1.eatSomething();

var monkey2= new monkey("John","orangutan ", "bamboo"); 
monkey2.eatSomething();