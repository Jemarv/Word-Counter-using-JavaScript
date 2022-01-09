// test if the characters present are a word (true)
function atLeastTwo(text) {
    // utilize an empty array to return false if .match returns null
    const letters = text.match(/[a-z]/gi || []);
    return letters.length >= 2;
}

// three consecutive characters is likely not a word
function noThreeInARow(text) {
    for (const char of text) {
        const occ = Array.from(text).filter(v => v ==  char);
        if (occ >= 3) {
            return false;
        }
    }
    return true;
}

const checks = [atLeastTwo, noThreeInARow];
const textInput = document.querySelector('.text-input');
const wordCount = document.querySelector('.words');
const letterCount = document.querySelector('.letters');
const spaceCount = document.querySelector('.spaces');