export function positiveSum(arr:number[]):number {
    let result:number = 0;

    arr.map((fn => {
        if(fn > 0) {
            result += fn
        }
    }))
    if(result == 0) {
        return 0
    }
    return result
  }


  console.log(positiveSum([1,1,4,5,6,7]))
  console.log(positiveSum([1]))
