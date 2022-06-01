function getNumDef(x) {
    if (x <= 1000 && x % 1 === 0 && x % x ===0) {
      console.log('число целое');
    } else if (x === 0 || x === 1) {
      console.log('число не целое');
    } else if (x > 1000) {
      console.log('данные не верны'); 
    }
  }
  
  getNumDef(699);
