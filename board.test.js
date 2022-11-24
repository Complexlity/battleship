import Board from './board'
import Ship from './ship'

console.log('Hello')
let board;

describe('Board Object', () => {
    beforeEach(() => {
        board = new Board()
    })

test('Should return an object', () => {
    expect(typeof board).toBe('object')
})

test('Should have coordinates', () => {
    expect(board.coordinates['1,4']).toBe(false)
    board.coordinates['0,0'] = true
            
})

test('Should Place Ships', () => {
    let coordinates = [
        [0, 4], [3, 6], [1, 4]
    ]

    for (let i of coordinates){
        let ship = new Ship()
        board.placeship(ship, i)
        expect(board.coordinates[i]).toBe(true)
    }
    console.log(board.coordinates)
})

test('Should check if coordinate has ship', () => {
    let coord = [3,5]
    expect(board.coordinates[coord]).toBe(false)    
})

test('Should receive attacks', () => {
    let coord = [1,3]
    board.coordinates[coord] = true
    board.recieveAttack(coord)
    expect(board.coordinates[coord]).toBeFalsy()
})

test('Should report all sunk', () => {
    expect(board.allSunk()).toBe(true)
    let coord = [4,6]
    board.coordinates[coord] = true
    expect(board.allSunk()).toBe(false)
})


})