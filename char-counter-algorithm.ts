function stringCharCounter(input: string) {
  let result: any = {};

  if (!input) throw new Error("The list is empty");

  for (let char of input) {
    let loweredChar = char.toLowerCase();
    let validAlphanumericalRegexp = /[^a-z0-9]/gi;

    if (!validAlphanumericalRegexp.test(loweredChar)) {
      result[loweredChar] = ++result[loweredChar] || 1;
    }
  }

  return result;
}

console.log(stringCharCounter("cccan ")); //output : {c:3, a:1, n:1}


// function stringCharCounter(input: string) {
//     let result: any = {};

//     if (!input) throw new Error("The list is empty");

//     for (let char of input) {
//       let loweredChar = char.toLowerCase();
//       let validAlphanumericalRegexp = /[^a-z0-9]/gi;

//       result[loweredChar] && !validAlphanumericalRegexp.test(char)
//         ? ++result[loweredChar]
//         : (result[loweredChar] = 1);

//       if (result[loweredChar] && !validAlphanumericalRegexp.test(char)) {
//         ++result[loweredChar];
//       } else {
//         result[char] = 1;
//       }
//     }

//     return result;
//   }

//   console.log(stringCharCounter("cccan")); //output : {c:3, a:1, n:1}

//Isn't refactored
