//remove the lowest rating.

function removeSmallest(numbers = []) {
    let tempArray = [];

    numbers.forEach((fn => {
        tempArray.push(fn)
    }))
    
    if(!tempArray) {
        return []
    }
    
    let findMin = Math.min(...tempArray);
    console.log(findMin)
    const index = tempArray.indexOf(findMin);
    if(index > -1) {
        tempArray.splice(index,1);
    }

    return tempArray
}


let result = removeSmallest([1,2,3,4,5,6])

console.log(result)
