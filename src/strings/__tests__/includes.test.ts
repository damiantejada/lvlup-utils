import { includes } from "../includes"

describe(('includes'), () => {
    it('includes("hola", "ho") should be true', () => {
        expect(includes('hola','ho')).toBe(true)
    })
    it('should rturn false if first argument is not a string', () => {
        // @ts-expect-error we want to test not string first argue usecase
        expect(includes(undefined, 'ho')).toBe(false)
    })
    it('includes("level","something")', () => {
        expect(includes('level','something')).toBe(false)
    })
})