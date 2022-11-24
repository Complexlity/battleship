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

})