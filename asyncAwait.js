const myPromise = require("./promises");

async function myFunction() {
    try {
    const result = await myPromise;
    console.log(result);
    } catch (error) {
    console.log(error);
    }
   }
   myFunction();
   