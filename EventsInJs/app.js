const a = document.querySelector("#main");
const b = document.querySelector("#img1");

// a.addEventListener("click", (e) => {
//     console.log("Main is clicked:")
// }, true)

// b.addEventListener("click", (e) => {
//     console.log("Li is clicked:")
// }, true);

a.addEventListener("click",  (e) => {
    console.log(e.target.parentNode);
    if(e.target.tagName === "IMG") {
        let removeit = e.target.parentNode;
        removeit.remove();
    }
   
})  