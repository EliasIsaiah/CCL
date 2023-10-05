// callback hell
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

// implementation of promises with classic js functions
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

  // using arrow functions
  doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

  doSomething()
  .then((url) => {
    // I forgot to return this
    return fetch(url);
  })
  .then((result) => {
    // result is undefined, because nothing is returned from
    // the previous handler.
    // There's no way to know the return value of the fetch()
    // call anymore, or whether it succeeded at all.
  });