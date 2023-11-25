// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of 
// arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:
// Time - O(n)
// Space - O(n)


//with multiple pointer s
function areThereDuplicates(i1:number | string, ...rest:number[] | string[]):boolean {
    const combine = [i1 , ...rest]
    let left = 0;
    let right = combine.length - 1;

    while(left <= right) {
        const rightCurrentValue = combine[right]
        const leftCurrentValue = combine[left]

        if(rightCurrentValue === leftCurrentValue) {
            return true
        } 
        else {
            right--
            left++
        }
    }

    return false
}


//naive solution with multiple pointers
function areThereDuplicates2(i1:number | string, ...rest:number[] | string[]):boolean {
    let combine = [i1 , ...rest]
    
    for(let i = 0; i < combine.length - 1; i++) {
        let nextVal = combine[i + 1]
        console.log(i, "i")
        console.log(nextVal, 'nextval')

        if(combine[i] === nextVal) return true
    }

    return false
}

