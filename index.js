// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(catsname){
    cats.push("Ralph")
}
function destructivelyPrependCat(catsname){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(catsname){
    cats.pop()
}
function destructivelyRemoveFirstCat(catsname){
    cats.shift()
}
function appendCat(catsname){
    var newArray = cats.slice();
    newArray.push("Broom")
    return newArray
}
function prependCat(catsname){
    const newArray = [...cats]
    newArray.unshift("Arnold")
    return newArray
}
function removeLastCat(catsname){
    const newArray = [...cats]
    newArray.pop()
    return newArray
}
function removeFirstCat(catsname){
    const newArray = [...cats]
    newArray.shift()
    return newArray
}







