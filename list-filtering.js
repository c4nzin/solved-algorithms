function filter_list(list) {
    const filteredArray = []
    for (const iterator of list) {
        if(typeof iterator == 'number') {
            filteredArray.push(+iterator)
        } else {
             
        }
    }
    return filteredArray
  }

  console.log(filter_list([15,25,"a","b","c"]))
