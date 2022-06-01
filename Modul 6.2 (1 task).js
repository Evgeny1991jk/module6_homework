let arr = [55, 85, 302, 1055, 505323, 1055, 12, false, 'example', 'test', NaN, null, 0]

let oddCounter = 0
let evenCounter = 0
let zeroCounter = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zeroCounter += 1
  } else if (typeof(arr[i]) !== 'number') {
    console.log(`это не число: ${arr[i]}`)
  } else if (arr[i] % 2 === 0) {
    evenCounter += 1
  } else {
    oddCounter +=1
  }
}

function getOddCount() {
  console.log(`это количество - ${evenCounter} - четных чисел`);
};

function getEvenCount() {
  console.log(`это количество - ${evenCounter} - четных чисел`);
};

function getZeroCount() {
  console.log(`это количество - ${evenCounter} - четных чисел`);
};

getOddCount();

getEvenCount()

getZeroCount()
