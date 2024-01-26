//function
//method = built in fncn
// function sum(){
//     return 2+2;
// }console.log(sum());

// function sum(num1,num2){
//         return num1+num2;
//     }console.log(sum(5 ,8));

// function sum(num1,num2){
//     if(num2 === undefined){
//         return num1 +num1;
//     }
//     return num1+num2;
// }console.log(sum(5 ));

// function getusernamefromemial(email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getusernamefromemial("plater@gmali.com"));


// const getusernamefromemial =function (email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getusernamefromemial("plater@gmali.com"));
const toProperCase = (names) => {
    return names.charAt(0).toUpperCase() + names.slice(1)tolowerCase();

};
console.log(toProperCase("surEnDer"));