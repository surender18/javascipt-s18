//fetch async await
// callbacks,promises,thenables and async await

//callbacks

// function firstfunction(parameters,callback){
//   //do some
//     callback();

// }
// // aka callback hell
// firstfunction(para,function(){
//     //do some
//     secondfunction(para,function(){
//     thirdfunction(para,function(){
        
//     });
//     });
// });


//promises

// 3 states pending fullfilled rejected

// const mypromise = new Promise((resolve,reject)=>{
//     // const error = false;
//     const error = true;

//     if(!error){
//         resolve("yes,resolved the promise"); 
//     }else{
//         reject("no rejected the promise");
//     }
// });
// console.log(mypromise);

//  mypromise.then(value =>{
//     console.log(value);
//  })
// mypromise.then(value =>{
//     return value+1;
   
//  })
//  .then(newvalue=>{
//     console.log(newvalue);
//  })
//  .catch(err =>{
//     console.error(err);
//  })

//  const mypromise = new Promise((resolve,reject)=>{
//     const error = false;
//     // const error = true;

//     if(!error){
//         resolve("yes,resolved the promise"); 
//     }else{
//         reject("no rejected the promise");
//     }
// });
// const mynextpromise = new Promise((resolve,reject)=>{
//  setTimeout(function()  {
//     resolve("mynext promise resolved");
    
//  }, 3000);
// });
// mynextpromise.then(value =>{
//     console.log(value);
// });
// mypromise.then(value =>{
//     console.log(value);
// });

// pending state

// fetch
// const users= fetch("https://jsonplaceholder.typicode.com/users");
// //pending
// console.log(users);
//  fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response=>{
//     return Response.json();
// })
// .then(data =>{
//     data.forEach(user=>{
//         console.log(user);

//     })
// });

// const users=fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response=>{
//     return Response.json();
// })
// .then(data =>{
//     data.forEach(user=>{
//         console.log(user);

//     })
// });
// console.log(users);

// const myUsers ={
//     userList:[]
// }
// const myHotFunction = async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     console.log(jsonUserData);
//     return jsonUserData;
// }
// myHotFunction();


//WORKFLOW FUNC

// const getAllUserEmails =async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     const userEmailArray = jsonUserData.map(user =>{
//         return user.email;
//     });
//     console.log(userEmailArray); 
// }
// getAllUserEmails();

// const getDAdJoke= async()=>{
//     const response=await fetch("https://icanhazdadjoke.com/",{
//         method:"GET",
//         headers:{
//             Accept:"application/json"
//         }
//     });
//     const jsonJokeData = await response.json();
//     console.log(jsonJokeData);

// }
// getDAdJoke();

const requestJoke= async(firstName,lastname)=>{
    const response = await fetch (`http://api.icndb.com/jokes/random?firstName=${firstName}&lastname=${lastname}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse.value);

}
requestJoke("Clint","Eastwood");