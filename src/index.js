module.exports = function reverse (n) {
    let abs = Math.abs(n);
    return abs = (typeof abs === 'number') ? abs.toString().split('').reverse().join('') : 'Not a number';
}
