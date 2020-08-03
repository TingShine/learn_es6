const promise = new Promise((resolve, reject) => {
    if(1 == 1) {
        resolve(10086);
    } else {
        reject(2);
    }
})

promise.then(val => {
    console.log(val);
}, (error) => {
    console.log(error);
})

const timeout = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    })
}

timeout(5000).then(val => {
    console.log(val);
})

let promise2 = new Promise((resolve, reject) => {
    console.log('here');
    resolve();
})

promise2.then(() => {
    console.log("resolved");
})

console.log('Hi');

// const getJSON = function(url) {
//     const promise = new Promise(function(resolve, reject){
//       const handler = function() {
//         if (this.readyState !== 4) {
//           return;
//         }
//         if (this.status === 200) {
//           resolve(this.response);
//         } else {
//           reject(new Error(this.statusText));
//         }
//       };
//       const client = new XMLHttpRequest();
//       client.open("GET", url);
//       client.onreadystatechange = handler;
//       client.responseType = "json";
//       client.setRequestHeader("Accept", "application/json");
//       client.send();
  
//     });
  
//     return promise;
//   };
  
//   getJSON("/posts.json").then(function(json) {
//     console.log('Contents: ' + json);
//   }, function(error) {
//     console.error('出错了', error);
//   });

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("fail")), 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(p1), 1000)
})

p2
.then(result => console.log(result))
.catch(error => console.log(error))