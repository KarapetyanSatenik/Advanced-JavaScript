function foo(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (Object.hasOwnProperty.call(obj, str[i])) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

console.log(foo("abcabcde"));

function zoo(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (Object.hasOwnProperty.call(obj, str[i])) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

console.log(zoo("hello world"));

function boo(arr1, arr2, number) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] + arr2[j] === number) {
        return true;
      }
    }
  }
  return false;
}

console.log(boo([1, 2, 3, 4], [5, 6, 7, 8], 67));

function throwAnError() {
  try {
    throw new Error("oopsie");
    console.log(12);
  } catch (error) {
    console.log(error.message);
  }
}

Promise.resolve(4)
  .then(() => {
    Promise.reject(5).catch((err) => {
      console.log(err);
    });

    return 2;
  })
  .catch((err) => {
    console.log(err, 1);
    return err;
  })
  .then((res) => {
    console.log(res, 2);
  })
  .catch((err) => {
    console.log(err, 3);
  });
