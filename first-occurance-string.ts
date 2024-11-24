function strStr(haystack: string, needle: string): number {


    //constraint
    if(haystack.length <= 0 && needle.length >= Math.pow(10,4)) {
        throw new Error('keep it in limit.')
    }


//logic
    return haystack.toLocaleLowerCase().indexOf(needle.toLocaleLowerCase()) > -1 ?  haystack.toLowerCase().indexOf(needle.toLowerCase()) : -1 


};

//usage
let result = strStr("sadbutsad", "sad")

console.log(result)
