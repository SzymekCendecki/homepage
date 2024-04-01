import "./style.scss";

document.addEventListener("DOMContentLoaded", ()=>{ 
    console.log("DOM fully loaded and parsed!")
    
    let mainDiv = document.querySelector("#main");
    let homeClassAttr = document.querySelector("#home").getAttribute("class");
    let gamesClassAttr = document.querySelector("#games").getAttribute("class");
    let programsClassAttr = document.querySelector("#programs").getAttribute("class");
    let othersClassAttr = document.querySelector("#others").getAttribute("class");

    console.log(document.querySelector("#home").getAttribute("class"))

    document.querySelector("#homeBtn").addEventListener("click", ()=>{
        document.querySelector("#home").classList.remove(document.querySelector("#home").getAttribute("class")); 
        document.querySelector("#games").classList.remove(document.querySelector("#games").getAttribute("class"));        
        document.querySelector("#home").classList.add("green");
        document.querySelector("#games").classList.add("hide");    
    })

    document.querySelector("#gamesBtn").addEventListener("click", ()=>{
        document.querySelector("#home").classList.remove(document.querySelector("#home").getAttribute("class")); 
        document.querySelector("#games").classList.remove(document.querySelector("#games").getAttribute("class"));
        document.querySelector("#home").classList.add("hide");
        document.querySelector("#games").classList.add("blue");
    })

    document.querySelector("#programsBtn").addEventListener("click", ()=>{
    
        // newDiv.classList.remove(newDiv.querySelector("class"));
        // newDiv.classList.add("orange");    
    })

    document.querySelector("#othersBtn").addEventListener("click", ()=>{
       
        // newDiv.classList.remove(newDiv.querySelector("class"));
        // newDiv.classList.add("yellow");  
    })
})