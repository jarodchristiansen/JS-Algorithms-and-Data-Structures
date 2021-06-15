// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Straightforward linear O(n) runtime
function fib(n) {
    let start = [0,1]
    for(let i = 1; i< n; i++) {
        start.push(start[i - 1] + start[i])
    }
    return start[n]
}

module.exports = fib;



//Recursive solution with quadratic O(n*2) runtime
// function fib(n) {
//     if(n < 2) {
//         return n
//     }
//    return fib(n-1) + fib(n-2)
// }
