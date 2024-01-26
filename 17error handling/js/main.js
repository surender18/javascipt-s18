
// varible ="sk";
// console.log(varible);

// "use strict";
//  const varible ="sk";
// console.log(varible);
// "use strict";
// const makeerror =()=>{
//   try {
//   const name = "sk";
//   name ="hoef";
//   }catch(err){
  // console.error(err);
  // console.error(err.stack);
  // console.warn(err);
  // console.table(err);
//   }
// };

// "use strict";
// const makeError =()=>{
//   try {
//   throw new customError("this is a customize error");
//   }catch(err){
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);

//   }
// };
// makeError();
//  function customError(message){
//   this.message = message;
//   this.name ="cusotmeerrpr";
//   this.stack =`${this.name}: ${this.message}`;
//  }


"use strict";
const makeError =()=>{
  try {
  throw new Error("this is a customize error");
  }catch(err){
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);

  }
};
makeError();
 