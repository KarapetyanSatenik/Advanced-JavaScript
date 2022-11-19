const a = {
  age: 23,
  foo: function(arr) {
      arr.forEach((val)=> {
          console.log(this.age + val);
      });
  }
};
a.foo([22]);