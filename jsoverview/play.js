
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done from fetchData!');
    }, 1500);
  });
  return promise;
};


setTimeout(() => {
  console.log('Timer is done!');
  fetchData().then(
    text => {
      console.log(text);
      return fetchData();
    }
  );
}, 2000);
console.log('Hello!')
console.log('Hi!')