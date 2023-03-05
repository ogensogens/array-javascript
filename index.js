// Mutating array Vs Non mutating array - Mutating changes original copy of array while non-mutating preserves the original copy

//Mutating Array
//1. Splice
//2. forEach
//3. Push
//4. Unshift 
//5. Pop

//Non-Mutating
//1. Concat
//2. Map
//3. filter
//4. Slice
//5. Reduce

let arrayOfLanguages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
arrayOfLanguages.push('Kotlin')
arrayOfLanguages.splice(3,0,'Java')
arrayOfLanguages.shift()
arrayOfLanguages.unshift('Scala', 'Swift')
console.log ({arrayOfLanguages})

let fruit = ['apple', 'mango', 'banana']
function changeFruit (fruit){
    fruit[2] = 'orange';
    return fruit
}
console.log(changeFruit(fruit)) // [ 'apple', 'mango', 'orange' ]

let arrayOfNumbers = [4,5,20,-2]
let largest = 0
function maxNumbers(arrayOfNumbers){
    for (let i= 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > largest){
            largest = arrayOfNumbers[i]
        }
    
}
    return largest
}
console.log(maxNumbers(arrayOfNumbers))

let array1 = [2,3,4,5]
let multiplyBy2 = array1.map(function (num){
    result = num *2
    return result
})
console.log(multiplyBy2)
