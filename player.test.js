import Player from './player.js'

let player = new Player()
describe('Player Object', () => {

    test('Should return object', () => {
        expect(typeof player).toBe('object')
    })

    test('Should have 5 ships', () => {
        expect(player.ships.length).toBe(5)
    })

    test('Should have a gameboard', () => {
        expect(player.board).toBeTruthy()
    })

    test('Should add ships to board', () => {
        let coordinates = [[1,4], [3,5], [6,7], [0,3], [6,2]]
        for(let i of coordinates){
            player.populateToBoard(i)
            expect(player.board.coordinates[i]).toBe(true)
        }
    })
})