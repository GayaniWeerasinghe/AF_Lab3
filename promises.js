const myPromise = new Promise((resolve, reject) => {
    condition = true;
    if (condition) {
    resolve('Success!');
    } else {
    reject('Failure!');
    }
   });
   myPromise.then((result) => {
    console.log(result);
   }).catch((error) => {
    console.log(error);
   });
   