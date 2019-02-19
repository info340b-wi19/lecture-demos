'use strict';


function renderdata(data){
    console.log(data)
}
 
let form = document.querySelector('form');                      // grab the form element
form.addEventListener('submit', function(event) {               // listen for when the submit event occurs
    event.preventDefault();                                     // prevent the default behavior from happening (
    console.log("Form sumbmitted!");

  
    fetch("data/employees.json")
    .then(function(response){
        return response.json();       
})
    .then(function(data){
    // console.log(data);
    renderdata(data);
})
})
