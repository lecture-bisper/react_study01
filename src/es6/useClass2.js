console.log('클래스 사용하기2');

console.log('\n----- ES6의 클래스 사용하기 -----\n');

class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }

  name = 'shape';

  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

var s = new Shape(0, 0);
console.log(s.area());
