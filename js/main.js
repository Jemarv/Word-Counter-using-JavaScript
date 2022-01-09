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
const wordCountE = document.querySelector('.words');
const letterCountE = document.querySelector('.letters');
const spaceCountE = document.querySelector('.spaces');

textInput.addEventListener('input', () => {
    const split = textInput.value.trim().split(/[\s-]/);

    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/[\s+]/gi) || []).length;

    let wordCount = 0;

    outer: 
    for (const text of split) {
        for (const check of checks) {
            if (!check(text)) {
                continue outer;
            }
        }
        wordCount++;
    }

    wordCountE.textContent = wordCount;
    letterCountE.textContent = letterCount;
    spaceCountE.textContent = spaceCount;
});