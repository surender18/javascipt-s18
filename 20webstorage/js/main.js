// window.alert("ok");
// alert("ok");
// window.alert(window.location);
// alert(location);

// const myobj ={
//   name:"sk",
//   hobbies:{"eat","sleep","code"},
//   logName:function(){
//     console.log(this.name);
//   }
// };
// const myArray =["eat","code"];
// myobj.logName();

// sessionStorage.setItem("mysessionStore",myobj);
// sessionStorage.setItem("mysessionStore",myArray);

// const mysessiondata= sessionStorage.getItem("mysessionStore");
// console.log(mysessiondata);
// console.log(typeof mysessiondata);

const myArray =["eat","code"];

const myobj ={
  name:"sk",
  hobbies:["eat","sleep","code"],
  logName:function(){
    console.log(this.name);
  }
};
// sessionStorage.setItem("mysessionStore",JSON.stringify(myobj));
localStorage.setItem("myLocalStore",JSON.stringify(myArray));

// const mysessiondata= JSON.parse(sessionStorage.getItem("mysessionStore"));
const myLocalData= JSON.parse(localStorage.getItem("myLocalstore"));


// console.log(mysessiondata);
console.log(myLocalData);

