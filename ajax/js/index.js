'use strict';


function renderDataList(data){
    let list = document.querySelector('ol');
    list.innerHTML = ''; //empty out old
    data.forEach((item) => {
        list.appendChild(renderDataItem(item));
    });
}

function renderDataItem(data) {

    let li = document.createElement('li');
    li.textContent = data.name;
    console.log(data);
    return li;
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
    renderDataList(data);
})
})


// function renderTaskItem(task) {
//     let li = document.createElement('li');
//     li.textContent = task.description;
//     if(task.complete) {
//       li.classList.add('font-strike');
//     }
//     //add remove callback
//     li.addEventListener('click', function() {
//       task.complete = !task.complete;
//       renderTaskList();
//     });
  
//     return li;
//   }
 
  
//   function renderTaskList(){
//     let list = document.querySelector('ol');
//     list.innerHTML = ''; //empty out old
  
//     state.taskList.forEach((task) => {  //element for each
//       list.appendChild(renderTaskItem(task)); //add the the list!
//     });
   
//     //show button status
//     renderInput();
//     // renderButtonAbility();  
//   }