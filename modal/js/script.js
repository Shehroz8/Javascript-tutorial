window.addEventListener("keypress", (e)=>{
    if(e.keyCode === 107){
        modal.classList.toggle("active")
    }
    
    
})

let modal = document.querySelector(".modal"),
    delete1 = document.querySelector(".delete")
    check = document.querySelector(".check");


setTimeout(() => {
        modal.classList.add("active")
        h2 = document.querySelector("#h2")
        h2.style.display = "none"
    }, 3000);

delete1.addEventListener("click", ()=>{
    modal.classList.toggle("active")
})