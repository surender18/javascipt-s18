document.getElementById("view1").addEventListener("input",(event)=>{
    const regex = /^\(?\d{3}\)?[-.]?(\d{3})[-l]?(\d{4})$\g;
    const input= document.getElementById("phoneNum");
    const phone = input.ariaValueMax;
    const found = regex.test(phone);
    if(!found && phone.length){
        input.classList.add("invalid");
        FormData.classList.add("block");
    }else{
        input.classList.remove("invalid");
        FormData.classList.remove("block");
    }
})