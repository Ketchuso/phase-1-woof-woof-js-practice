

const pupsUrl = 'http://localhost:3000/pups';

document.addEventListener("DOMContentLoaded", () => {
    fetch(pupsUrl)
    .then((response) => response.json())
    .then( pups => {const dogBar = 
    }

    const div = document.getElementById("dog-bar");
    const span = document.createElement("span");
    div.appendChild("span");
})

const dogBar = document.getElementById('dog-bar');
dogBar.append(newSpan);

// function renderBrew(brew){
//     const div = document.createElement('div');
//     div.id = `brew-card-${brew.id}`;
//     div.className='card alert-success';
//     div.style = 'padding: 20px; margin: 20px;'

//     const icon = document.createElement('h1');
//     icon.textContent='🍺';
    
//     const header = document.createElement('h3')
//     header.textContent = `${brew.name}`;

//     const p = document.createElement('p')
//     p.id = `brew-info-${brew.id}`
//     p.textContent = `
//         Type: ${brew.brewery_type} - 
//         City: ${brew.city} -
//         State: ${brew.state}
//     `
//     div.append(icon, header, p);
//     brewList.appendChild(div);
// }


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