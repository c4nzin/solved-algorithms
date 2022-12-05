function updateLight(current) {
  if(current == 'green') {return current = 'yellow'}
  else if (current ==='yellow') {return current = 'red'}
  else { return current = 'green'}
}

console.log(updateLight('green'))
