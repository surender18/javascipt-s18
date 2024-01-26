// //dom
// const view1 = document.getElementById("view1");
// // console.log(view1);
// const view2 = document.querySelector("#view2");
// // console.log(view2);
// // view1.style.display ="flex";
// // // view2.style.display ="none";
// // view2.style.display ="flex";
// const view = document.getElementsByClassName("view");
// console.log(view);
// const sameviews = document.querySelectorAll(".view");
// console.log(sameviews); 
// const divs = view1.querySelectorAll("div");
// console.log(divs);
// const samedivs = view1.getElementsByTagName("div");
// console.log(samedivs);
// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
// console.log(evenDivs);
// for(let i=0;i<evenDivs.length;i++){
//   evenDivs[i].style.backgroundColor ="yellow";
//   evenDivs[i].style.width ="123px";

// }

// const navText = document.querySelector("nav h1");
// console.log(navText);
// navText.textContent ="hello world";
// const navbar = document.querySelector("nav");
// navbar.innerHTML=`<h1>Hello<\h1><p>THis should align right.`;
// console.log(navbar);
// navbar.style.justifyContent="space-between";
// console.log(evenDivs[0]);
// console.log(evenDivs[0].parentElement);
// console.log(evenDivs[0].parentElement.childNodes);
// console.log(evenDivs[0].parentElement.children);
// console.log(evenDivs[0].nextSibling);
// view1.style.display="none";
// view2.style.display="flex";

const createDivs = (parent,iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor="#000";
  newDiv.style.width="100px";
  newDiv.style.height="100px";
  newDiv.style.margin="10px";
  newDiv.style.display="flex";
  newDiv.style.justifyContent="center";
  newDiv.style.alignItems="center";
  parent.append(newDiv);

};
for(let i=1;i<=12;i++){
  createDivs(view2,i);
}