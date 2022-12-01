// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)

function getSum( a,b )
{
    if (a === b) {
        return 0;
    }
    else if(a > b) {
        let total = 0;
        let totalArray = [];
        for(b; b <= a; b++) {
            totalArray.push(b)
            total += b;
        }
        return total
    }
    else if(a <= b) {
        let total = 0;
        let totalArray = [];
        for(a; a <= b; a++) {
            totalArray.push(a)
            total += a;
        }
        return  total
    }
    
}

console.log(getSum(-5,1))
console.log(getSum(15,15))
console.log(getSum(1,3))
