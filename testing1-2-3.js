var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}


//solution 2 (with class)
//examples
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let arr = ["a", "b", "c","d","e","f"]

class TextEditor {
  tempArr = [];

  count(array = []) {
    let number = 1;
    for(let i=0; i < array.length; i++) {
        this.tempArr.push(`${number++}: ${array[i]}`)
    }

    if(array.length == 0 ) {
      return []
    }

    return this.tempArr
  }
  
}

let txt = new TextEditor();
console.log(txt.count(arr))
