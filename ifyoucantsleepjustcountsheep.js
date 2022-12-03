var countSheep = function (num = 0){
    return setInterval(() => {console.log(num++ + ' sheep')}, 1000);
  }
countSheep(1)
