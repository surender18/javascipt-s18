//event listener 
// const view = document.querySelector("#view2");
// // console.log(view);
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// const dosome=() =>{
//  alert("doing something");
// };
// h2.addEventListener("click",dosome,false );
// h2.removeEventListener("click",dosome,false);

// h2.addEventListener("click", function(event){
//     console.log(event.target);
//     event.target.textContent="clicked";
// // });
// document.addEventListener("readystatechange",(event)=>{
//     if(event.target.readyState === "complete"){
//     console.log("readyState: complete");
//     initApp();
// }
// });

// const initApp =()=>{
//     const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// view.addEventListener("click",(event)=>{
//     view.style.backgroundColor ="purple";
    
// },
// false
// );
// div.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     div.style.backgroundColor ="blue";

// },
// false
// );
//     h2.addEventListener("click",(event)=>{
//         event.target.textContent="clicked";

//     },
//     false
//     );
// };

// document.addEventListener("readystatechange",(event)=>{
//     if(event.target.readyState === "complete"){
//     console.log("readyState: complete");
//     initApp();
// }
// });

// const initApp =()=>{
//     const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// view.addEventListener("click",(event)=>{
// // view.classList.add("purple");
// // view.classList.remove("darkblue");
// view.classList.toggle("purple");
// view.classList.toggle("darkblue");
    
// },
// false
// );
// div.addEventListener("click",(event)=>{
//     div.classList.toggle("blue");
//     div.classList.toggle("yellow");

// },
// false
// );
//     h2.addEventListener("click",(event)=>{
//   const mytext=event.target.textContent;
//   mytext==="My 2nd View"
//   ? (event.target.textContent = "Clicked")
//   :(event.target.textContent="My 2nd View");
//     },
//     false
//     );

//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover",(event)=>{
//         // event.target.classList.add("height100");
//         event.target.classList.toggle("height100");


//     });
// };

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
    console.log("readyState: complete");
    initApp();
}
});

const initApp =()=>{
    const view = document.querySelector("#view3");
};
