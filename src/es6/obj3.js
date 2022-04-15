console.log('\n----- 기존 ES5 방식의 구조 분해 할당 -----\n');

var list = [0, 1];
var item1 = list[0]; // 배열의 인덱스를 사용해서 변수에 데이터 할당
var item2 = list[1];
var item3 = list[2] || -1; // 기본값 사용
var temp = item2; // 스와핑기법
item2 = item1;
item1 = temp;

var obj = {
  key1: 'one',
  key2: 'two',
};

// 위와 동일한 내용, object 타입을 가지고 진행
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; // 기본값
var newKey1 = obj.key1;
