const read = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('read resolved!');
    }, 500)
  });
};

const type = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('type resolved!');
    }, 500)
  });
};

const listen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('listen resolved!');
    }, 500)
  });
};

const tryCatchSuccess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tryCatch SUCCESS resolved');
    }, 2500);
  });
};

const tryCatchError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('tryCatch ERROR reject');
    }, 2500);
  });
};

const type = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('type resolved!');
    }, 500)
  });
};
async function _allTodo() {

  const _read = await read();
  console.log('read:', _read);
  const _type = await type();
  console.log('type:', _type);
  const _listen = await listen();
  console.log('listen:', _listen);
  // console.log('Jquery', $);
  return 'allTodo done!'
}

async function _allTodoInit() {

  const _read = await read();
  console.log('read:', _read);
  const _type = await type();
  console.log('type:', _type);
  const _listen = await listen();
  console.log('type:', _listen);
  // console.log('Jquery', $);
  return 'allTodo done!'
}

/*function _allTodo() {
 return await write();
 // console.log(write());
 // return await tryCatchError();
 }*/

/*
 async function _allTodoTryCatch() {
 try {
 // const tryCatchError_ = await tryCatchError();
 const tryCatchSuccess_ = await tryCatchSuccess();
 // console.log('SUCCESS', tryCatchSuccess_);
 // return 'SUCCESS';
 } catch (err) {
 // console.log('ERROR CATCH', err);
 // return 'ERROR';
 }
 }
 */

module.exports = {
  allTodo: _allTodo,
  allTodoInit: _allTodoInit,
  // allTodoTryCatch: _allTodoTryCatch,
};