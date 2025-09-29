let { sum, isPalindrome, isStrongPassword, wordCount } = require('../src/functions');

describe("sum function", () => {
    test("sum two numbers", () => {
        expect(sum(2, 2)).toBe(4)
    })

    test("work with null", () => {
        expect(sum(0, 0)).toBe(0)
    })
})

describe("Check if a string is palindrome", () => {
    let strArray = ["Anna", "Mom", "Civic", "Kayak", "Level", "Madam", "Radar"];
    strArray.forEach(elem => {
        test(`${elem} is a palindrome`, () => {
            expect(isPalindrome(elem)).toBe(true)
        });
    });
});

describe ("Is strong password", () => {
    let passArray =
    ["Strongqwerty!@#123",
    "AnotherSrtongPassword$456",
    "YetanotherStrong1!"]

    passArray.forEach(elem => {
        test(`${elem} is a strong password`, () => {
            expect(isStrongPassword(elem)).toBe(true)
        });
    });
});

describe("Is weak password", () => {
    let passArray =
    ["123",
    "Anja",
    "DorisOceana!"]

    passArray.forEach(elem => {
        test(`${elem} is a weak password`, () => {
            expect(isStrongPassword(elem)).toBe(false)
        });
    });
});

describe("Count words in a string", () => {
    let strArray = [
        ["This is a test sentence", 5],
        ["One two three", 3],
        ["Count words in a string", 5]]
    strArray.forEach(elem => {
        test(`"${elem[0]}" has ${elem[1]} words`, () => {
            expect(wordCount(elem[0])).toBe(elem[1])
        });
    })
})

// toBeGreaterThan
// toBeLessThan
// toBeGreaterThanOrEqual