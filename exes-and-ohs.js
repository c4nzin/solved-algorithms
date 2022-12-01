function XO(str =[]) {
    let amount_x = [],amount_o = [];
    for(let i of str.toString()) {
        if(i.toLocaleLowerCase() == 'x') {
            amount_x.push(i)
        } 
        if(i.toLocaleLowerCase() == 'o') {
            amount_o.push(i)
        }
    }
    return amount_o.length === amount_x.length ? true:false; 
}

console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo"))
