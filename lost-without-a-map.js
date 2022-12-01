function maps(x = []){
    let tempArray_ = []
    x.forEach((fn => {
        tempArray_.push(fn * 2)
      }))
    return  tempArray_
  }
  
  maps([1,2,3])
