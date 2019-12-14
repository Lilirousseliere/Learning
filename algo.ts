// let tableau = [1,2,3,4]
// let sum = 0
// for (let entry of tableau) {
//     sum = sum + entry
// }
// console.log (sum)

// let tableau = ['bonjour', 'je', 'm', 'appelle', 'aurelié']
// let sentence = ""
// for (let entry of tableau) {
//     sentence = sentence + " "+ entry
// }
// console.log(sentence)


function increment(entry: number[]){
    let accumulateur = []
    for(let x of entry){
        accumulateur.push(x+1);

    }
    return accumulateur
}

function fizzBuzz (entry : number[]) {
    let accumulator = []
    for (let x of entry) {
        if(x %3 == 0 && x % 5 == 0 ){
            accumulator.push("fizzbuzz")
        }
        else if (x % 3 == 0){
            accumulator.push("fizz")
        }
        else if ( x % 5 == 0) {
            accumulator.push("buzz")
        }
        
        else{
            accumulator.push(x.toString())
        }
    }
    return accumulator
}

let result = fizzBuzz([1,3,6,20,15])
console.log(result)

// let result = increment([1,2,3999,4])
// console.log(result)