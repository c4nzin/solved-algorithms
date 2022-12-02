function removeEveryOther(arr = []){
    setInterval(() => {
        for(let index of arr) {
            const indexFinder = arr.indexOf(index);
            if(index !== arr[0]) {
                if(indexFinder > -1) {
                    arr.splice(indexFinder,1)
                }
            }
        }
    }, 3000);
    return arr
  }

console.log(removeEveryOther(["hello","world","hello","world"]))
removeEveryOther(['can','mert','can','mert'])
removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep","Keep", "Remove", "Keep", "Remove", "Keep"])
