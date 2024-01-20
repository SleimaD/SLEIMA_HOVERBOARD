let body = document.body

//? creattion of new elements into my body
let container = document.createElement("div")

container.classList.add("container")

body.prepend(container)



let content = document.createElement("div")

content.classList.add("contentTitle")

body.insertBefore(content,container)



let scanner = document.createElement("div")
scanner.classList.add("scanner")


content.appendChild(scanner)



let span = document.createElement("span")

span.innerText = "Hoverboard"

scanner.appendChild(span)



let eyes = document.createElement("div")

eyes.classList.add("loader")

body.insertBefore(eyes, body.lastElementChild)




//? Define an array of colors
let colors = ['red', 'blue', 'green', 'yellow', 'orange','purple','aquablue']



//? Define a function that returns a random color from the colors array
function Randomcolor() {
    return colors[Math.floor(Math.random() * colors.length)]
}



//? Define a function that changes the background color of an element to a random color
function putColor(e) {
    let color = Randomcolor()
    e.style.backgroundColor = color 
}




//? Define a function that changes the background color of an element to a specific color
function removeColor(e) {
    e.style.backgroundColor = "#1e1e1e"   
}




//? Define a function that creates a div with the class "miniDiv", adds event listeners to it, and returns it
function createDiv() {
    let div = document.createElement("div")

    div.classList.add("miniDiv")

    div.addEventListener('mouseover', () => putColor(div))
    
    div.addEventListener('mouseout', () => removeColor(div))

    return div
    
}



//? Define the number of divs to create
let numDivs = 650



//? Use a loop to create the divs and append them to the container
for (let i = 0; i < numDivs; i++) {

    container.appendChild(createDiv())
    
} 