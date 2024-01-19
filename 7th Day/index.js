// // Events of JavaScript
// The change in the state of an object is known as event 
// Events are fired to notify code of "interesting changes" that may affect code execution 


let btn = document.querySelector("#btn");
btn.onclick = () => {
    console.log("Button was clicked at first:");
    let a = 15;
    a++;
    console.log(a);
}

btn.onclick = () => {
    console.log("Button was clicked at second time:");  // priority to the last handler in the java scipt and over right the first handler 
}


let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Mouse was overed on Div");
    // let a = 25; 
    // a++;
    // console.log(a);
}




// Event object
// It is a special object that has the details about the event
// All event handlers have access to the event Object's properties and methods

btn.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}

div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}



//Event listners
//event listeners are functions that wait for a specific event to occur on a particular
//HTML element and then respond to that event by executing a set of instructions or code

// let btn1 = document.querySelector("button")

const handler3 = () => {
    console.log("The event was clicked: Handler_3");
}


btn.addEventListener("click", () => {
    console.log("The event was clicked: Handler_1");
})

btn.addEventListener("click", () => {
    console.log("The event was clicked: Handler_2");
})

btn.addEventListener("click", handler3)

btn.addEventListener("click", () => {
    console.log("The event was clicked: Handler_4");
})

btn.addEventListener("click", () => {
    prompt("Second time the event is clicked: Please mention some words for you:");
})


btn.removeEventListener("click", handler3)




// Question:
// Create a toggle button that changes the screen to dark mode when clicked and change to light mode when clicked again 

let mode = document.querySelector("#btn-1");
let currentmode = "light";
let body = document.querySelector("body");


mode.addEventListener("mouseover", () => {
    if(currentmode === "light")
    {
        currentmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }

    else
    {
        currentmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currentmode);
})