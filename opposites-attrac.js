//solution1

function lovefunc(flower1, flower2){
    // moment of truth

    if(flower1 % 2 == 0 && flower2 % 2 != 0) {
        return true
    }
    if(flower1 % 2 != 0 && flower2 % 2 == 0) {
        return true
    }
    if(flower1 % 2 != 0 && flower2 % 2 != 0) {
        return false
    }
    if(flower1 % 2 == 0 && flower2 % 2 == 0) {
        return false
    }

  }

console.log(lovefunc(2,2))

//solution 2 
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
