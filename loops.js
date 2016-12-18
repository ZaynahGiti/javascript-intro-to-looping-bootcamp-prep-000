// 1) loops forLoop(array) adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times

for (let i=0;i<=25;i++){
  console.log(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
}

//loops whileLoop(n) counts down from n to 0

var n
while(n){
  console.log(n);
  --n;
};

//loops doWhileLoop(array) removes elements from `array` until `array` is empty or until `maybeTrue()` returns `
//false

do(array){
array.drop();

}while(array.empty());
