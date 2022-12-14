function foo(x, y){
    console.log(this);
    this.x = x
    this.y = y
}

foo.prototype.bin= function () {
    function zoo() {
        return this.x + "hello"
    }
  return  zoo.call(this)
}
let a =  new foo(1,2)
console.log(a.bin());