//your JS code here. If required.
let count=0;
let btn= document.getElementById("incrementBtn");
btn.addEventListener("click",()=>{
    alert("Un-incremented value:" + count);
    count++;
    document.getElementById("counter").innerText=count;
})