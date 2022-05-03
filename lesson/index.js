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

function Future(name, color, buy){
    this.name = name
    this.color = color
    this.buy = falce
}

const Banan = new Future("banan", "yellow", true)


//class

class NewCar{
    constructor(name, color, airBag){
        this.name = name
        this.color = color
        this.airBag = airBag
    }
}

//class constroktor
class Car(){
    constructor(name, color, buy){
        this.name = name
        this.color = color
        this.buy = buy
    }
}

const Merc = Car("merc", "black", "buy")

console.log(Merc)
