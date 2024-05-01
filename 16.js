let i = 0;
let value = 101;

while (i < 50) {
  let isPrime = true;

  let j = 2;
  while (j < value) {
    if (value % j === 0) {
      isPrime = false;
      break;
    }
    j++;
  }

  if (isPrime) {
    console.log(value);
    i++;
  }
  value++;
}
