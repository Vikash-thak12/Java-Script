const URL = "https://cat-fact.herokuapp.com/facts";

const getpara = document.querySelector(".para");
const btn = document.querySelector("#btn");
const test = document.querySelector(".test");


// innertext 
//   It returns the visible text content of an element,
//   excluding any styles or hidden elements.It takes into account CSS styles and may also
//   handle layout - related issues.
  const res1 = document.querySelector("#real").innerText;
  console.log(res1);


//textContent
//  It returns all text content, including hidden elements and styles.
//  It does not consider the visibility or layout of the elements.
  const res2 = document.querySelector("#real").textContent;
  console.log(res2);

const getfacts = async () => {
    console.log("Getting Data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    getpara.innerText = data[1].text;   

}


btn.addEventListener("click", getfacts);

// Understanding terms in API 
// AJAX: is asynchronous js and XML 
// JSON: is javascript object Notaiton 
// JSON() Method: returns a second promise that resolves with the results of parsing the response body text as JSON.(Input is JSON, Ouptut is JS object)