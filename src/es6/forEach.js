const qs = '?banana=100&apple=20&orange=30';

function parse1(qs) {
  var queryString = qs.substr(1);
  var chunks = queryString.split('&');
  var result = {};

  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }
  return result;
}

console.log(parse1(qs));

function parse2(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {};

  // chunks.forEach((chunk) => {
  //   const parts = chunk.split('=');
  //   const key = parts[0];
  //   const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
  //   result[key] = value;
  // });

  // 전개 연산을 사용하여 forEach 실행
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });
  return result;
}

console.log(parse2(qs));

let array = [1, 2, 3, 4, 5];

for (var i = 0; i < array.length; i++) {
  console.log('사용하는 배열 : ' + array);
  console.log('현재 index : ' + i);
  console.log('현재 index의 값 : ' + array[i]);
}
console.log('-------------------');
array.forEach((item, index, arr) => {
  console.log(`사용하는 배열 : ${arr}`);
  console.log(`현재 index : ${index}`);
  console.log(`현재 index의 값 : ${item}`);
});
