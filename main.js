class Vehicle {
constructor (name, wheelCount, maxSpeed){
this.name = name;
this.wheelCount = 4;
this.maxSpeed = maxSpeed;
this.speed = 0 ;
}
accelerate(){
  if ((this.maxSpeed - this.speed.value)< (this.maxSpeed/3)){
    this.speed = this.maxSpeed;
  }
  else {
    this.speed = this.speed.value + maxSpeed/3
  }
}
}

class Car {
}

class Ferrari {
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}