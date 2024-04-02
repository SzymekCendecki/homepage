import "./style.scss";

document.addEventListener("DOMContentLoaded", ()=>{ 
    console.log("DOM fully loaded and parsed!")
    
    let home = document.querySelector("#home");
    let games = document.querySelector("#games");
    let programs = document.querySelector("#programs");
    let others = document.querySelector("#others");

    document.querySelector("#homeBtn").addEventListener("click", ()=>{
        home.classList.remove(home.getAttribute("class")); 
        games.classList.remove(games.getAttribute("class"));  
        programs.classList.remove(programs.getAttribute("class")); 
        others.classList.remove(others.getAttribute("class"));       
        home.classList.add("green");
        games.classList.add("hide"); 
        programs.classList.add("hide"); 
        others.classList.add("hide");    
    })

    document.querySelector("#gamesBtn").addEventListener("click", ()=>{
        home.classList.remove(home.getAttribute("class")); 
        games.classList.remove(games.getAttribute("class"));
        programs.classList.remove(programs.getAttribute("class")); 
        others.classList.remove(others.getAttribute("class")); 
        home.classList.add("hide");
        games.classList.add("blue");
        programs.classList.add("hide"); 
        others.classList.add("hide");
    })

    document.querySelector("#programsBtn").addEventListener("click", ()=>{
        home.classList.remove(home.getAttribute("class")); 
        games.classList.remove(games.getAttribute("class"));
        programs.classList.remove(programs.getAttribute("class")); 
        others.classList.remove(others.getAttribute("class")); 
        home.classList.add("hide");
        games.classList.add("hide");
        programs.classList.add("orange"); 
        others.classList.add("hide"); 
    })

    document.querySelector("#othersBtn").addEventListener("click", ()=>{
        home.classList.remove(home.getAttribute("class")); 
        games.classList.remove(games.getAttribute("class"));
        programs.classList.remove(programs.getAttribute("class")); 
        others.classList.remove(others.getAttribute("class")); 
        home.classList.add("hide");
        games.classList.add("hide");
        programs.classList.add("hide"); 
        others.classList.add("yellow");
    })
})