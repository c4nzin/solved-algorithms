function isIsogram(str) {
  let i,j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i){
    for(j = i + 1; j < str.length; ++j) {
      if(str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

console.log(isIsogram('ca'))
