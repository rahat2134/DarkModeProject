let darkbtn=document.querySelector("#darkMode");   
let currentMode="light";
// add event listener
darkbtn.addEventListener("click",function(e){
    // just checking whether its working
    // console.log("yes its working");
    // its event object
    console.log(e.target);

    //when we click then bg color of body should be same
    if(currentMode=="light"){
    currentMode="dark";
        document.querySelector(".phone").style.backgroundColor="black";
}
    else{
        currentMode="light";   
        document.querySelector(".phone").style.backgroundColor="white";
}
    })
