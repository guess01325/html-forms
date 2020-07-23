const resultsDiv = document.querySelector('#results');
console.log(resultsDiv);

new URLSearchParams(window.location.search).forEach((value,name) => {

    console.log(name);
    console.log(value);

   let resultElement = document.createElement('p');
   let valueElement = document.createElement('p')
});




console.log(name);
console.log(value);

let nameElement = document.createElement('p');
let valueElement = document.createElement('p');

nameElement.textContent = name;
valueElement.textContent = value; 

console.log(nameElement);


resultDiv.appendChild(nameElement);
resultDiv.appendChild(nameElement);

