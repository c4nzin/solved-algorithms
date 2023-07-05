// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.
//Solution 1
export function maskify(cc: string) {
  let maskedValue: string[] = [];

  for (let index of cc) {
    maskedValue.push(index);
  }

  if (maskedValue.length >= 4) {
    let result: string[] = [];
    let lastFour: string[] = [];

    for (
      let index = maskedValue.length - 1;
      index >= maskedValue.length - 4;
      index--
    ) {
      lastFour.push(maskedValue[index]);
    }

    for (let index = 0; index < maskedValue.length - 4; index++) {
      result.push(maskedValue[index].replace(maskedValue[index], "#"));
    }

    let reversedLastFour = lastFour.reverse();
    let concat = result.concat(reversedLastFour);
    return concat.join("");
  } else {
    return maskedValue.join("");
  }
}

let result = maskify("asoi234109432uo432ij342oi23i32i3432");
let result2 = maskify("can");
console.log(result);
console.log(result2);

//Solution 2
