// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let results = []
    let holder = str.split(' ');
    for (i of holder) {
        i[0] = i.toUpperCase();
        results.push(i[0].toUpperCase() + i.substring(1))
    }
    return results.join(' ')
}

module.exports = capitalize;
