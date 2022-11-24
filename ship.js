 class Ship{
    constructor(length){
        this.length = length
        this.hits = 0
        this.isSunk = false
    }

    hit(){
        if(this.isSunk) return
        this.hits++
        if(this.hits == this.length) this.isSunk = true
    }
}

module.exports = Ship

let myShip = new Ship(3)
console.log(myShip.length)
console.log(myShip.hits)
console.log(myShip.hit())
console.log(myShip.hit())
console.log(myShip.hit())
console.log(myShip.isSunk)
