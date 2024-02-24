const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-cointainer");

//Adding Tasks to the app
function addTask(){
    if (inputBox.value === '') {
        alert("You must write something...")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);

        //To delete task(s)-cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //cross-icon
        li.appendChild(span)
    }
    inputBox.value="";
    //So whenever user will add a new task, this will call the saveData() function to store the data locally.
    saveData();
}

//Mark Checked or delete the task
listContainer.addEventListener("click",(e)=>{
    //if we first click on li, then it should mark the circle/checked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        //Also we have to save this data(wheather the task is checked or deleted)
        saveData();
    }
    //else if we clicked "cross" it will remove the task
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);


//Then we have to save our data in the browser, so if the users refresh the page, their data will be saved.
function saveData(){
    //whatever the tasks user put in the "listContainer", it'll be saved in browswer's local storage, named as "data".
    //This function will call everytime user add a new task
    localStorage.setItem("data",listContainer.innerHTML);
}

//Now we have to display the saved data everytime user refreshes or opens the browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();