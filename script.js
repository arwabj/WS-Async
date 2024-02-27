/*Primise in JS*/

//Example Task
//Create a Promise that resolves after a certain delay.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Usage
delay(2000).then(() => {
  console.log("Promise resolved after 2000ms");
});

/*Consuming Promise */

//Chaining Promises
//Using .then() for handling resolved promise
//Using .catch() for handling rejected promise
//Example Task
//Chain multiple Promise to simulate sequential execution

// function stepOne() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Step One Completed");
//     }, 1000);
//   });
// }

// function stepTwo(message) {
//   console.log(message);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("step Two Completed");
//     }, 2000);
//   });
// }
// stepOne()
//   .then(stepTwo)
//   .then((result) => {
//     console.log(result);
//   });

/*Queuing Promises */

//Promise.all() for parallel execution
//Promise.race() for competing Promises
//Managing multiple asynchronous operations efficiently
//Example Task
//Use Promise.all() to excecute multiple Promises in parallel.

// const promise1 = Promise.resolve("Promise 1 resolved");
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, "Promise 2 resolved")
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(resolve, 1000, "Promise 3 resolved")
// );

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

/*Creating Promises */
//Customizing Promise resolution
//Handling asynchronous operations with Promises
//Promise.resolve() and Promise.reject()
//Example Task
//Create a Promise that resolves or rejects based on a condition.

// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num > 0) {
//       resolve("Number is positive");
//     } else {
//       reject("Number is not positive");
//     }
//   });
// }

// //Usage
// checkNumber(5)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/*Iterating with Async/Await*/
//intro to async function
//Use of the await Keyword
//Simplifying asynchronous code with async/await
//Example Task
//Use async/await to simplify asynchronous code.

// function resolveAfter2Secands() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved after 2 seconds");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Secands();
//   console.log(result);
//   // expected output : "resolved after 2 seconds"
// }
// asyncCall();

/*Error Handling with JS*/
//Handling errors in synchronous code
//Dealing with errors in asynchronous code
//Best practices for error handling
//Example Task
//Demonstarte error handling in asynchronous code.

// function asynTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber > 0.5) {
//         resolve("Task completed succefully");
//       } else {
//         reject(new Error("Task failed"));
//       }
//     }, 1000);
//   });
// }

//Usage
// asynTask()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error.", error.message);
//   });

/*Practical Examples*/
//Implementing a simple asynchronous operation with Promises
//Using async/await for cleaner asynchronous code
// Demonstrating error handling in a real-world scenario
//Example task
//Implement a practical example using async/await.

// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     //Simulating fetching user data from a server
//     setTimeout(() => {
//       const users = {
//         1: { name: "John", age: 30 },
//         2: { name: "Alice", age: 25 },
//       };
//       const user = users[userId];
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error("User not found"));
//       }
//     }, 1000);
//   });
// }

// async function getUserDetails(userId) {
//   try {
//     const user = await fetchUser(userId);
//     console.log('User Details.', user);
//   } catch (error) {
//     console.error('Error.', error.message);
//   }
// }

//Usage
// getUserDetails(1);
// getUserDetails(3); //This will trigger an error
