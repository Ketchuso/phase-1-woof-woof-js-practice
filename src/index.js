

const pupsUrl = 'http://localhost:3000/pups';

document.addEventListener("DOMContentLoaded", () => {
    fetch(pupsUrl)
    .then((response) = response.json())
    .then((pups))
})


const div = document.getElementById("dog-bar");
const span = document.createElement("span");
div.appendChild("span");

const dogBar = document.getElementById('dog-bar');
dogBar.append(newSpan);

// // Get the parent element
// const parent = document.getElementById("parent-id");

// // Create the child element
// const child = document.createElement("p");
// child.textContent = "Hello, world!";

// // Add the child to the parent
// parent.appendChild(child);

// Explanation:
// Get the parent element:
// Use document.getElementById() or other methods like querySelector() to obtain a reference to the parent element where you want to add the child.
// Create the child element:
// Use document.createElement() to create the new element you want to add as a child.
// Set content (optional):
// If needed, set the content of the child element, such as text, attributes, or other child elements.
// Append the child:
// Use parent.appendChild(child) to add the child element to the end of the parent element's child list.
// Generative AI is experimental.