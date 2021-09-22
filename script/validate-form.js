/*  Selecting elements from the index.html  */
const taskSubmit = document.querySelector('#task-submit');
const taskReset = document.querySelector('#task-reset');
const taskName = document.querySelector('#task-name');
const taskDescription = document.querySelector('#task-description');
const taskAssign = document.querySelector('#task-assign');
const taskDate = document.querySelector('#task-date');
const taskStatus = document.querySelector('#task-status');
const spanError =  document.getElementsByClassName('err-task');

/* Declaring variables to store form field values */
let nameData, descriptionData, taskAssignData, taskDateData, taskStatusData, errorMessage;
function validFormFieldInput( ) {
    // alert("Data : "+nameData+"\n"+descriptionData+"\n"+taskAssignData
    // +"\n"+taskDateData+"\n"+ taskStatusData);
    alert('dd')
}

taskName.addEventListener('focusout', ()=>{
    nameData = taskName.value;
    errorMessageGenerator(taskName, spanError[0], nameData);
  
});

taskDescription.addEventListener('focusout', ()=>{
    descriptionData = taskDescription.value;
    errorMessageGenerator(taskDescription, spanError[1], descriptionData);
    if(taskDescription.length >= 4){
        ++count;
        alert(count)
    }
    if(count === 3) {
        taskSubmit.disabled = false;
    }
});

taskAssign.addEventListener('focusout', ()=>{
    taskAssignData = taskAssign.value;
    errorMessageGenerator(taskAssign, spanError[2], taskAssignData);
    if(taskAssign.length >= 4){
        ++count;
        alert(count)
    }
    if(count === 3) {
        taskSubmit.disabled = false;
    }
});

taskDate.addEventListener('focusout', ()=>{
    taskDateData = taskDate.value;
    if( !taskDateData ) {
        errorMessageGenerator(taskDate, spanError[3], '');
        spanError[3].innerHTML = ' Enter the correct date';
    } else {
        errorMessageStyleReset(taskDate, spanError[3]);
    }
    validateAllFields()
});

taskStatus.addEventListener('focusout', ()=>{
    taskStatusData = taskStatus.value;
    if( taskStatusData === 'Select...')
    {
        errorMessageGenerator(taskStatus, spanError[4], '');
        spanError[4].innerHTML = ' Select a status';
    } else{
        errorMessageStyleReset(taskStatus, spanError[4]);
    }
    validateAllFields()
});

function errorMessageGenerator( parentElement, spanElement, data ) {   
    data.length < 5  ? errorMessageStyle(parentElement, spanElement) : errorMessageStyleReset(parentElement, spanElement);
}


function errorMessageStyle( parentElement, spanElement ) {
    parentElement.style.border = '1px solid red';
    spanElement.style.color = 'red';
    errorMessage = ' Enter alteast 5 letters';
    spanElement.innerHTML = errorMessage;
}

function errorMessageStyleReset( parentElement, spanElement ) {
    spanElement.innerHTML = '';
    parentElement.style.border = '';

}

function validateAllFields() {
    if(!nameData && !descriptionData && !taskAssignData && 
        !taskDateData && !taskStatusData && !errorMessage) {
            taskSubmit.disabled = false;
        }else{
           
        }
}

taskSubmit.addEventListener('click', validFormFieldInput);
