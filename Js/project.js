const addTaskBtn= document.querySelector('.addTask');
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector('.todos')

const toggleComplete = (event )=> {
    const {parentElement} = event.currentTarget ;
    const isCompleted = [...parentElement.classList].some(
    (className) => className === "completed"
    );
  
   if (!isCompleted) {
    event.currentTarget.innerText="Todo";
    }else{
    event.currentTarget.innerText ="Complete";
    }
   
    event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (event)=> {
    if (confirm("Silmek istediğinize emin misiniz?")) {
        todosContainer.removeChild(event.currentTarget.parentElement);
        
      } 
      
}

const renderTodoItem =(todoText)=> {
    const todoItemElement = document.createElement("li");
    todoItemElement.classList.add("todoItem");
    

    const completeButton = document.createElement("button");
    completeButton.classList.add("completeButton");
    completeButton.addEventListener("click", toggleComplete);
    completeButton.innerText = "Complete";
    todoItemElement.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", removeItem);
    deleteButton.innerHTML = "Delete";
    todoItemElement.appendChild(deleteButton);
    
    const textElement = document.createElement("p");
    textElement.innerText = todoText ;
    textElement.classList.add("todoText");
    todoItemElement.appendChild(textElement);
    


    todosContainer.appendChild(todoItemElement);
    todoInput.value="";
    todoInput.focus();
};



const addTask =() => {
    if(todoInput.value === ""){
        alert("Bu Alan Boş bırakılamaz!");
    }else{
        renderTodoItem (todoInput.value);
       
    }
};

addTaskBtn.addEventListener("click",addTask);