//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(value) {
    return value.replace(/\s+/g, ''); //regex
}

let txt = noSpace(" aaaaaaaaaa  aaa  ")
console.log(txt)
