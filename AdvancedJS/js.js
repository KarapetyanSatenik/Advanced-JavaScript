function foo() {
  return (a) => {
    return this.a;
  };
}
const obj1 = { a: 2 };
const obj2 = { a: 3 };
const bar = foo.call(obj1);
console.log(bar());
