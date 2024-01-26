//if 
// if(condition){
//     //run some code
// }else{
//     do some 
// }
// let customerbanned = true;
// let customerbanned =false;

// let soup ="maggi h na";
// let reply;
// if(customerbanned){
//     reply="no soup for you";
// }
// else if(soup){
//     reply =' soup available  ${soup}';
// }else{
//     reply='sorry not available ${soup}'
// }
//     console.log(reply);

// let testscore =100;
// let collegestudent= true;
// let grade;
// if(testscore>=90){
//     grade="A";

// }else if(testscore>=80){
//     grade="B";
// }
// else if(testscore>=70){
//     grade="C";
// }
// else if(testscore>=60){
//     grade="D";
// }else{
//     if(collegestudent){
//         grade ="U";

//     }else{
//         grade ="F";
//     }
// }
// console.log(grade);

// switch

// switch (1){
//     case 1:
//     console.log(12);
//     break;
//     case 2:
//     console.log(21);
//     break;
//     default:
//  console.log("no match");
// }

// ternary operaror
// condition ? iftrue :iffalse;
// let soup ="chicken soup";
// let response =soup? "yes we have":"sorry no souce";
// console.log(response);

let soup ="chicken soup";
let iscustomerban=false;
let soupaccess =iscustomerban
? "no soup"
:soup
? 'yes we have'
:"no sorry";
console.log(soupaccess);