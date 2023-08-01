import { definePrime } from "../definePrime";

describe('tests for definePrime function', () => {
    it('show simple number', () => {
        expect(definePrime(17)).toBe('Число 17 - простое число')
    });
    it('show complex number', () => {
        expect(definePrime(18)).toBe('Число 18 - составное число')
    });
})