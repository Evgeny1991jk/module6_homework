function funcFirstNum(x) {
    return function funcSecondNum(y) {
      return console.log(x + y);
    }
  }
  
  funcFirstNum(5)(1);
