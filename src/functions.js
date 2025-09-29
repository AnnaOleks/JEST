function sum(a, b) {
    return a + b;
}

function isPalindrome(str) {
    let reverseStr = str.split("").reverse().join("").toLowerCase();
    if (str.toLowerCase() == reverseStr) {
        return true;
    };
    return false;
}

function isStrongPassword(password) {
    let hasLetter = /[A-Za-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$]/.test(password);

    return password.length >= 16 && hasLetter && hasNumber && hasSpecialChar;
}

function wordCount(str) {
    return str.trim().split(" ").length;
}

module.exports = { sum, isPalindrome, isStrongPassword, wordCount };