const _promiseSimple = (name, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise success, name: ${name}, id: ${id}`)
    }, 2000)
  })
};

const _promiseChain = () => {
  return new Promise((resolve, reject) => {

  })
};
/*Promise.resolve(1)
  .then(() => {
    return Promise.resolve(2);
    // when we arrive to this line, const hi = Promise.resolve(2) promise starts execution.
    // when :hi is resolved, all thens, that are attached to it, - get fired.
    // in our case, only the next :then is attached.
    // If :hi got rejected, the closest :catch would get fired.
  }).then((value) => {
  console.log(value) //=> 2
  return Promise.reject(3)
}).then(() => {
  // is never executed
}).catch((value) => {
  console.log(value) //=> 3
  return Promise.reject(4)
}).catch((value) => {
  console.log(value) //=> 4
  return 5 // same as Promise.resolve(5)
}).then((value) => {
  console.log(value) //=> 5
  // notice we returned nothing. same as Promise.resolve(undefined)
}).then((value) => {
  console.log(value) //=> undefined
});*/
const _promiseResult = () => {
  return Promise.resolve('Promise.resolve value success!');
};

const _promiseAll = () => {
  let p1 = Promise.resolve(3);
  let p2 = 1337;
  let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "foo");
  });
  return Promise.all([p1, p3, p2])
};

const _promiseRace = () => {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 999, "two");
  });
  let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "three");
  });
  let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "four");
  });
  let p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "five");
  });
  let p6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "six");
  });

  // return Promise.race([p1, p2]);
  // return Promise.race([p3, p4]);
  return Promise.race([p5, p6]);

};


module.exports = {
  promiseSimple: _promiseSimple,
  promiseChain: _promiseChain,
  promiseRace: _promiseRace,
  promiseAll: _promiseAll,
  promiseResult: _promiseResult
};