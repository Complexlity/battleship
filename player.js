import Board from "./board.js";
import ship from "./ship.js";
import Ship from "./ship.js";

let player = (function () {
  
    class Player {
    constructor() {
      this.board = new Board();
      this.ships = generateShips();
    }

    populateToBoard(coordinate) {
      if(!this.ships.length) return false;
      this.board.placeship(this.ships[0], coordinate);
      this.ships.shift()
      return true;
    }
  }

  function generateShips() {
    let shipLengths = [5, 4, 3, 2, 1];
    let ships = [];
    for (let i of shipLengths) ships.push(new Ship(i));
    return ships;
  }
  return Player;
})();

export default player;

let newPlayer = new player()

let coordinates = [[1,4], [3,5], [6,7], [0,3], [6,2]]
        for(let i of coordinates){
            newPlayer.populateToBoard(i)
        }

// newPlayer.populateToBoard([1,3])

// console.log(newPlayer)

for (const key in newPlayer.board.coordinates) {

    if (newPlayer.board.coordinates.hasOwnProperty(key)) {

        console.log(`${key}: ${newPlayer.board.coordinates[key]}`);
    }
}

// console.log(newPlayer.board.coordinates['1,3'])