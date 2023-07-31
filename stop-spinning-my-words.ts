const wordsPool = {
  word1: "Hey",
  word2: "Hey bro whats fellow doing my bla",
  word3: "Just like the name of this kata",
  word4: "Strings passed in will consist of only letters",
  word5: "spaces will be included",
};
//Refactor yapılan kod daha kısa (kopyasız)
export function spinWords(words: string): string {
  const translateToArr = words.split(" ");

  const modifiedArr: any[] = [];

  translateToArr.forEach((currEl) => (currEl.length >= 5 ? modifiedArr.push(Array.from(currEl).reverse().join("")) : modifiedArr.push(currEl)));
  return modifiedArr.join(" ");
}

//Refactor etmedigim spagetti kod
// export function spinWords(words: string): string {
//   const translateToArr = words.split(" ");

//   const modifiedArr: any[] = [];
//   translateToArr.forEach((el) => {
//if uzun hali
//     if (el.length >= 5) {
//       const modifiedEl = Array.from(el).reverse().join("");
//       console.log(modifiedEl);

//       modifiedArr.push(modifiedEl);
//     } else {
//       modifiedArr.push(el);
//     }
//   });
//   const finalText = modifiedArr.join(" ");
//   return finalText;
// }

// console.log(spinWords(wordsPool.word2));
