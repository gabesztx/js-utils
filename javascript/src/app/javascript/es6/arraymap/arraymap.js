const arrayMap = () => {
  return [{key: 1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}].map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
  });
};



export default arrayMap;