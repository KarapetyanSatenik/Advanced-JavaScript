
let value = 58;
let sum = 0;

while (value > 1) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
console.log(sum);