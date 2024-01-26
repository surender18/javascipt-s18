//arrays
// const myarray =[];
// myarray[0]="sk";
// myarray[1]=1000;
// myarray[2]=true;
// console.log(myarray);
// console.log(myarray.length);
// console.log(myarray[myarray.length-1]);
// myarray.push("school");
// console.log(myarray);
// myarray.pop();
// console.log(myarray);
// myarray.pop();
// console.log(myarray);
// myarray.unshift("roman");
// console.log(myarray);
// const newlength = myarray.shift();
// console.log(newlength);
// console.log(myarray);
// delete myarray[1];
// console.log(myarray);
// myarray.splice(1,0,50);
// console.log(myarray);

// const myarray=["a","b","c","d","e"];
// const newarray=myarray.slice(1,4)
// console.log(newarray);
// myarray .reverse();
// console.log(myarray);
// const newstring =myarray.join();
// console.log(newstring);

// const newstring =myarray.join();
// const newarray=newstring.split(",");
// console.log(newarray);
// const myarraya =["a","b","c"]
// const myarrayb =["d","e","f"];
// // const newarray=myarraya.concat(myarrayb);
// const newarray=[...myarraya,...myarrayb];
// console.log(newarray);

const eqshelfa=["ball","bat","pad"];
const eqshelfb=["vk","ab","maxi"];
const coltha=["top","upper","cap"];
const clothb=["hood","jack","inner"];
// console.log(eqshelfa[2]);
// console.log(clothb[1]);
const equipdepmt=[eqshelfa,eqshelfb];
const clothdept=[coltha,clothb];
// console.log(equipdepmt[0][1]);
// console.log(clothdept[1][0]);
const sportstore=[equipdepmt,clothdept];
console.log(sportstore[0][0][1]);
// console.log(sportstore[0][1][0]);
console.log(sportstore[1][1][0]);
