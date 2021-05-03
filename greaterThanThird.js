// Values greater than thrid - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 3rd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return false.
// Example: Values_greater([5,2,3,2,1,4]), should print 3 and return [5,3,4]

// list is array for js

function valuesGreaterThanThird(array){
    var newArray = [];
    for(var i=0; i<array.length; i++){
        if(array.length < 2){
            console.log("Less than 2 elements")
        }
        if(array[i]>=array[2]){
            newArray.push(array[i])
        }
    }
    return newArray;
}
console.log(valuesGreaterThanThird([5,2,3,2,1,4]));