function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }

    return [1, ...digits];
}

console.log(plusOne([9]));  
console.log(plusOne([1, 2, 3]));  
console.log(plusOne([9, 9, 9])); 
