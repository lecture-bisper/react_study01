// reduce() 사용하기
let arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sum(arrNums));

const query = '?banana=100&apple=20&orange=30';

function parse1(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');

  //   문자열을 map()을 사용하여 배열로 생성 후 reduce()를 사용하여 객체타입으로 변환
  return chunks
    .map((chuck) => {
      const [key, value] = chuck.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}

console.log(parse1(query));
