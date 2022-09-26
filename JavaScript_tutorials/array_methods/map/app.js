//map: creates a new array with the results of a calling a callback on every element in the array
//-- it is essentially mapping an array from one state to another

const texts = ['rofl', 'lol', 'omg', 'ttyl']

const caps = texts.map(function(t){
    return t.toUpperCase();
})

// results
texts; //['rofl', 'lol', 'omg', 'ttyl']
caps; //['ROFL', 'LOL', 'OMG', 'TTYL']