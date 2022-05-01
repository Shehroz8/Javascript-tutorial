"use strict"
// function constroktor

function Car(name, color, airBag){
    this.name = name
    this.color = color
    this.airBag = airBag
    this.buy = false
    this.speed = function(){
        console.log(`${this.name} 100 km yurdi`);
    }
}

Car.prototype.town = function(){
    console.log("News");
}

const Merc = new Car("Merc","black", false)
const Ferari = new Car("Ferari","red", true)

Merc.speed()
Merc.town()

console.log(Ferari);
console.log(Merc);

//class

class NewCar{
    constructor(name, color, airBag){
        this.name = name
        this.color = color
        this.airBag = airBag
    }
}
