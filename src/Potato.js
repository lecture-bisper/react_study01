import React from 'react';

function Potato(props) {
  console.log(props);
  console.log(props.fav);
  console.log(props.something);
  console.log(props.papapa);
  console.log(props.aaa);
  console.log(props.booltype);
  return <h3>I love potato</h3>;
}

function SweetPotato({ data }) {
  // function SweetPotato(props) {
  //   console.log(props);
  //   const { data } = props;
  //   let data = props.data;
  //   1번 방식 : object 타입의 변수 props가 가지고 있는 key명을 사용하여 출력
  //   return <h3>I Love {props.data}</h3>;
  //   2번 방식 : ES5 버전의 객체 분해 할당을 통해서 object 타입의 변수 props의 key명을 사용하여 새로운 변수에 데이터를 할당하고, jsx 부분에서 해당 변수를 사용
  //   3번 방식 : ES6 버전의 객체 분해 할당을 통해서 object 타입의 변수 props의 key명을 새로운 변수명으로 사용하고 해당 key의 값을 새 변수의 값으로 할당하여 사용
  //   4번 방식 : ES6 버전의 객체 분해 할당을 통해서 매개변수 부분에 {변수명} 을 사용하여 jsx 부분에서 해당 변수를 사용하여 출력
  return <h3>I Love {data}</h3>;
}

let name = '감자';

// export : 해당 파일을 외부에서 import을 할경우 외부에서 지정한 함수, class, 변수 등을 사용할 수 있도록 설정하는 명령어
// default : 해당 파일을 import을 할경우 기본적으로 사용할 수 있는 함수, class, 변수 등으로 등록
// default를 사용 시 import 할 경우 이름을 원하는 대로 붙여서 사용할 수 있음
// export default Potato;

// Named Export 방식
// Named Export 방식을 사용 시 import 하는 부분에서 {함수명, class명, 변수명} 형태로 사용해야 함
export { Potato, SweetPotato };
export { name };

// export 사용 시 한번에 여러개의 함수, class, 변수등을 외부에서 사용하록 설정이 가능함
// export { Potato, name };
