let { sum } = require('../src/functions');

describe("sum function", () => {
    test("sum two numbers", () => {
        expect(sum(2, 2)).toBe(4);
    });
});