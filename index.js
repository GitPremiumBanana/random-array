function randomInt(a, b) {
    
    if (a > b) {
      
        var c = a;
      
        a = b;
        b = c;
    
    }
  
    return Math.floor(Math.random() * (b - a + 1) + a);
}
  
function simple(arr) {
    
    const num = randomInt(0, (arr.length - 1));
  
    return arr[num];

}
  
module.exports.simple = simple;