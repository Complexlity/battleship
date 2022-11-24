import Ship from './ship'

let ship;

describe('My Ship', () => {
    beforeEach(() => {
        ship = new Ship(3)  
    })
    test.skip('Should return appropriate object', () => {
        expect(ship).to({length:3, hits:0, isSunk:false})
    })

    test('Should take hits', () => {
        ship.hit()
        ship.hit()
        expect(ship.hits).toBe(2)
    })

    test('Should sink', () => {
        ship.hit(); ship.hit(); ship.hit()
        expect(ship.isSunk).toBeTruthy()
    })
})

// let ship = (length) => {

// }