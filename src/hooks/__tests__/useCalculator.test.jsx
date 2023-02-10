import useCalculator from "../useCalculator";

const {add, subtract, multiply, divide} = useCalculator()

describe('adding numbers', () => {
    it('empty array', () => {
        expect(add([])).toBe(0)
    })

    it('2+3-1-23+53', () => {
        expect(add([2,3,-1,-23,53])).toBe(34)
    })
})

describe('subtracting numbers', () => {
    it('empty array', () => {
        expect(subtract([])).toBe(0)
    })

    it('array of length 1: single number', () => {
        expect(subtract([3])).toBe(-3)
    })

    it('array elements 2, -1, 2', () => {
        expect(subtract([2,-1,2])).toBe(-3)
    })
})

describe('multiplying numbers', () => {
    it('empty array', () => {
        expect(multiply([])).toBe(1)
    })

    it('array of length 1: single number', () => {
        expect(multiply([3])).toBe(3)
    })

    it('total=0', () => {
        expect(multiply([0])).toBe(0)
    })
})

describe('dividing numbers', () => {
    it('empty array', () => {
        expect(divide([])).toBe(0)
    })

    it('array of length 1: single number', () => {
        expect(divide([3])).toBe(0)
    })

    it('total=0', () => {
        expect(divide([0])).toBe(NaN)
    })
})