// hola como andan -> Hola Como Andan
/*
    'level up es la onda' -> 'Level Up Es La Onda'
    'LEVEL UP' -> 'Level Up'
    4 -> 4
    null -> null
    {} -> {}
*/

import { capitalize } from "../capitalize"

describe('capitalize',() => {
    //it.each
    it.each([
        {tested: 4, expected: 4, label: '4'},
        {tested: null, expected: null, label: 'null'},
        {tested: {}, expected: {}, label: '{}'},
    ])('capitalize($label) should be $expected', ({tested,expected}) => {
        // @ts-expect-error we should test not string param case
        expect(capitalize(tested)).toStrictEqual(expected)
    })
    //it
    it('Should return Level Up when string is level up', () => {
        const result = capitalize('level up')
        expect(result).toBe('Level Up')
    })
})