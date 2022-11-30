


function isSquare(n) {
 if((Math.sqrt(n) % 1) === 0)
		return true; //square numbers
	else
		return false; //not square numbers
}


console.log(isSquare(-1))
console.log(isSquare(0))
