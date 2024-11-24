function removeElement(nums: number[], val: number): number {
    if(nums.length <= 0 && nums.length >= 100 && val <= 0 && val >= 100) {
        throw new Error('keep it between 1-100')
    }


    let k = 0
    for(let i = 0; i < nums.length; i++) {
       if(nums[i] !== val) {
            nums[k] = nums[i]
            k++
       } 
    }



    return k
    
};


//usage
let numbers: number[] = [3,2,2,3]

removeElement(numbers,2) //k = 5
