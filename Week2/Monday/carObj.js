var Car= function(color){
  //Public
  this.color = color;

  //private
  var engine=engine;
  var fuel=0;
  
  var useFuel= function(){
    fuel--;
  
  }
  this.addFuel=function(x){
    fuel+=x;
  }
  
  
  this.start=function(){
    useFuel();
    if(fuel>0){
      console.log("Wrom Wrom");
    }else{
      console.log("Fuel empty");
    }
      
    }
}

var mySecondCar= Object.create(Car);
var newCar = new Car("red" ,"Super Engine");
newCar.addFuel(2);
newCar.addFuel(2);
newCar.start();
newCar.start();
newCar.color="black"
console.log(newCar.color);
newCar.start();
newCar.addFuel(2);
newCar.start();



//var a = 'color';
//newCar[a];