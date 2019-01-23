// ------ LIGHTNING EXERCISE ONE ---------//

// // document.querySelector with id
console.log(document.querySelector("#container"))

const sectionElement = document.querySelector("#container")
console.log(sectionElement);

// // document.querySelector with class
const h2Element = document.querySelector(".article-title");
console.log(h2Element);

// // document.querySelector with tag
const articleElement = document.querySelector("article");
console.log(articleElement);



// // What can you do with it once you have it?
// // Set the .innerHTML
document.querySelector("h2").innerHTML = "Monkey butts";
// document.querySelector("#container").innerHTML = "<h1> A new blog </h1><section> This is a new section! </section>"

// // Add or remove a class
document.querySelector("h2").classList.add("red-text");

// // LIGHTNING EXERCISE TWO
// // 1. Create a JavaScript file and link it to your `index.html` file.
// // 2. Use `document.querySelector` to get a reference to the element with an id of "main-header"
// const mainHeaderElement = document.querySelector("#main-header");
// // 3. Log the reference to the console
// console.log(mainHeaderElement);
// // 4. Add a class of "blue-text" to the element
// mainHeaderElement.innerHTML = "This should be blue!";
// mainHeaderElement.classList.add("blue-text");

// document.querySelectorAll with class
const allArticles = document.querySelectorAll("article");


for(let i = 0; i < allArticles.length; i++){
    allArticles[i].classList.add(`green-background-${i}`);
    allArticles[i].id=i;
    // allArticles[i].innerHTML = "<h1>New html!!</h1>"
}
console.log(allArticles);

// 1. In your JavaScript file, use `document.querySelectorAll` to select all of the elements in your HTML file with a class of "body-text"
const bodyTextElements = document.querySelectorAll(".body-text");
// 1. Log the reference to the console
console.log(bodyTextElements);

// 1. Loop through the NodeList of elements and set the `.innerHTML` property of each element to "Hello, world!"
for(let i = 0; i< bodyTextElements.length; i++){
    bodyTextElements[i].innerHTML = "Hello, world!";
    console.log(bodyTextElements[i]);
}



