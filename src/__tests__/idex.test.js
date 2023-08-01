const multiply = require('../index');

xdescribe('test multiply', () => {
    it('test multiply 1 * 0 to equal 1', () => {
        const result = multiply(1, 0);
        expect(result).toBe(1);
    });
    it('test multiply 1 * 0 to equal 0', () => {
        const result = multiply(1, 0)
        expect(result).toBe(0);
    });
});
