import Board from './board.js'
import Ship from './ship.js'

let player = (function(){
    
class Player{
    constructor(){
        this.board = new Board()
        this.ships = generateShips()

    }
    

}


function generateShips(){
    let shipLengths = [5, 4, 3, 2, 1]
    let ships = []
    for (let i of shipLengths) ships.push(new Ship(i))
    return ships
}
    return Player
})()

export default player

