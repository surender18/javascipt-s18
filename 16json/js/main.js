  //used to send and receive data
  const myObj = {
    name: "sk ",
    hobbies:["eat","sleep","code"],
    hello: function () 
    {
      console.log("hello");
    }

};
   console.log(myObj);
   console.log(myObj.name);
   myObj.hello();
   console.log (typeof myObj);
   const sendJSON = JSON.stringify(myObj);
   console.log(sendJSON);
   console.log(typeof sendJSON );
   console.log(sendJSON.name);

   const receiveJSON  = JSON.parse(sendJSON);
   console.log(receiveJSON);
