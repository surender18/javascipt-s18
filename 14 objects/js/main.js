// //objects
// const myobj ={ name:"sk"};
// console.log(myobj);
// console.log(myobj.name);

// const anotherobj={
//     alive:true,
//     answer:45,
//     hobbies:["eat","sleep","code"],
//     beverage:{
//         morning:"coffee",
//         afternoon:"tea"
    
// },
// action:function (){
//     // return "hello guys";
//   return `time for ${this.beverage.afternoon}`;
// }
// };
//  console.log(anotherobj.alive);
//  console.log(anotherobj.beverage.morning);
//  console.log(anotherobj["beverage"]);
//  console.log(anotherobj.hobbies);
//  console.log(anotherobj.action());
  
// const vehicle={
//     wheels:4,
//     engine:function(){
//         return "hmmmm";

//     }
// };
// const truck=Object.create(vehicle);
// truck.doors =2;
// console.log(truck);
// console.log(truck.wheels);
// console.log(truck.engine());

const band = {
    vocals: "robert ",
    guitar: "jim",
    bass: "honey",
    drums: "rit"
};
// console.log(Object.keys(band));
// console.log(Object.values(band));
// for(let job in band){
//     console.log(`On ${job}, it's ${band[job]}`);
// } 
//destructor
 const {guitar: myVariable,bass:mybass} = band;
console.log(myVariable);
console.log(mybass);