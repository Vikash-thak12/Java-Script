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

let ele = document.querySelector("p");
console.log(ele);