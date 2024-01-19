// //Dom: Document object model in java Script

// //Window Object:
// // The window object reprents an open window in a browser. It is a browser object & is automatically created by the browser 
// // It's a global object with lots of properties and methods.


// // What is dom?
// // when a web page is loaded then the browser creates a document object model of the page 
// // console.dir(window.document)  => used to print properties and methods of the document




// //Dom manipulation 

// //selecting with id

// let heading = document.getElementById("heading");  //p
// console.log(heading);


// //selecting by classname => returns html collection     
// let heading_class = document.getElementsByClassName("heading-class");
// console.log(heading_class);
// console.dir(heading_class);


// //selecting by tagname

// let parahs = document.getElementsByTagName("p");
// console.log(parahs);
// console.dir(parahs);


//query selector 

// let element = document.querySelector("p");
// console.log(element);
// console.dir(element);

// let allele = document.querySelectorAll("h1");
// console.log(allele);
// console.dir(allele);

// let classes = document.querySelectorAll(".heading-class");
// console.log(classes);
// console.dir(classes);

// let myid = document.querySelector("#heading");
// console.dir(myid);




// Dom manipulation 
// properties 
// tagname = returns tag for element nodes 
// innertext = returns the text context of the element and all its children 
// innerhtml = returns the plain text or html contents  in the element 
// textcontent = returns textual content even for hidden elements

// let ele = document.querySelector("p");
// console.log(ele);

// let div = document.querySelector("div");
// console.log(div);
// console.dir(div);


//difference between innettext and innerhtml 
// innerTEXT going to reutrn the actual plain text where as innerHTML going to return the plain text with its tags

// let h1 = document.querySelector("h1");
// console.dir(h1);




// //Questions:
// 1. Create a h2 heading element with text :  "hello JavaSCript". Append "From Apna College Students" to this text using JS.
// 2. Create 3 divs with common class name - "box". Access them and add some unique text to each of them 

// let h2 = document.querySelector("h2");
// console.log(h2);
// h2.innerText = h2.innerText + "from apna college students";



// let divs= document.querySelectorAll(".box");
// console.dir(divs);
// divs[0].innerText = "The land of lord Rama";
// divs[1].innerText = "The land of lord Krishna";
// divs[2].innerText = "The land of lord Shiva";


// using loop to change the value of each div 
// let idx = 1;
// for(div of divs)
// {
//     div.innerText = `The value of the curent Div is: ${idx}`;
//     idx++;
// }






// Attributes of DOM 
// Attributes are nothing but provides addidional information about an html element. Example id, class, href, src,etc
//getattribute(attribute)  used to get value of the attribute 
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

// let para1 = document.querySelector("p");
// console.log(para1.getAttribute("class"));



//setattribute(attribute, value) used to change the value of the attribute 
let para = document.querySelector("p");
console.log(para.setAttribute("class", "vikash"));



//style 
let div2 = document.querySelector("div");
div2.style.backgroundColor = "green";


//Insert elements in DOM manipulation 
// Node.append(el)  adds at the end of the node(inside)
// node.prepend(el)  adds at the start of the node (inside)
// node.before(el) add before the node(outside) 
// node.after(el) adds after the node(outside)


let newbtn = document.createElement("button");
newbtn.innerText = " Click me!";
console.log(newbtn);


 
div2.prepend(newbtn);
div2.before(newbtn);
div2.after(newbtn);
div2.append(newbtn);



let new_heading = document.createElement("h2");
new_heading.innerText = " Welcome To The Heading: ";
console.log(new_heading);


div2.before(new_heading);
para.remove();   // remove the paragraph from the html page 
new_heading.remove();



// Questions
// 1. Create a new button element. Give it a text "Click me", background color of red and text color of white.
//    Insert the button as the first element insert the body tag


let newbtn1 = document.createElement("button");
newbtn1.innerText = "Click me!";
newbtn1.style.background = "red";
newbtn1.style.color = "white";
div2.before(newbtn1);


// 2. Create a <p> tag in html, give it a class and some styling 
//    Now create a new class in css and try to append this class to the <p> Element.


let new_para = document.querySelector("p");

new_para.classList.add("new_paragraph");