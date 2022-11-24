import Ship from './ship.js'

let board = (function(){

    class Board{
    constructor(length=10){
        this.length=length
        this.coordinates = getCoordinates()
    }




    placeship(ship, coord){
        debugger
        let length = ship.length
        let yAxis = coord[0]
        let xAxis = coord[1]
        let cord = `${yAxis}, ${xAxis}`


        // check if coordinate is free
        if (this.coordinates[cord] == true) return
        // check if ship can fit
       
        for (let i = xAxis; i < xAxis + length; i++ ){
            let content = this.coordinates[`${yAxis}, ${i}`]
            if( content == true || i > 9) return
        }

        //insert ship in coordinate
        for (let i = xAxis; i < xAxis + length; i++ ){
            this.coordinates[`${yAxis},${i}`] = true     
    }
    }

    recieveAttack(coord){
        let yAxis = coord[0]
        let xAxis = coord[1]
        let cord = `${yAxis}, ${xAxis}`
        let hit = false;
        let positionHit = this.coordinates[coord]

        if(positionHit){
        this.coordinates[coord] = false
        hit = true
    }
    return hit
}
    


    allSunk(){
        let coordinatObject = this.coordinates
        for (const key in coordinatObject ) {
            if (coordinatObject.hasOwnProperty(key)) {
                if(coordinatObject[key]) return false
            }
        }

        return true
    }
}

function getCoordinates(){
    let coordinates = {}
    for(let i = 0; i < 10; i++){
        for(let j=0; j<10; j++){
          let coord = [i, j]
          coordinates[coord] = false
        }
    }
    return coordinates
    }
    
    return Board

})()

export default board