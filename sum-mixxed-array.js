function sumMix(x = []) {
    let total = 0
     x.forEach((sum => {
      total += Number(sum)
     })) 

     return total //total sum
  }
  
  let values = [1,2,3,4,"1","6","8"];
  
console.log(sumMix(values)) //output
