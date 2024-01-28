// hof 
// does at least one of the following
// takes one or more argument 
// return a  fun as it result

import { post } from "./post.js";
post.forEach((post) =>{
    console.log(post);
});
console.clear();
const filteredPost = post.filter((post)=> {
    // return post.userId ===1;
    return post.userId ===5;
});
console.log(filteredPost);
const mappedPost = filteredPost.map((post)=>{
    return post.id*10;
});
console.log(mappedPost);

const reducedpostValue = mappedPost.reduce((sum,post)=>{
    return sum + post;
});
console.log(reducedpostValue);
