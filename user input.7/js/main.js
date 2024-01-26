//user input
// alert("hello World!");
// let mybool = confirm("ok === true \n cancal === false");
// console.log(mybool);
// let names =prompt("Please enter your good name.");
// console.log(names ?? "you didn't enter name");
// console.log(typeof names);
//??  null coalescing operator
// let names =prompt("Please enter your good name.");
// if(names){
//     console.log(names );

// }else{
//     console.log("you didn't enter your name.");
// }

let names =prompt("Please enter your good name.");
if(names){
    console.log(names.length );
    console.log(names.trim().length);
    console.log(names.trim());

}else{
    console.log("you didn't enter your name.");
}
