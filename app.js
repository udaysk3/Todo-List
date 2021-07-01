//SELECTORS

const todoInput = document.getElementById('todo-input');
let addBtn = document.querySelector('.addbtn');
let form = document.getElementById('form');
const todolist = document.querySelector('.todo-list');
const filter = document.querySelector('.filter');
const username = document.querySelector(".title");



// PROMPT
var answer = prompt('Enter your name', 'name..');


//ADDING NAME TO HEADING
const h1 = document.createElement("h1");

h1.appendChild(document.createTextNode(`${answer}'s  TodoList`));

h1.className = "title";

username.appendChild(h1);


//EVENT LISTENERS

// console.log(`username is ${answer}`);

addBtn.addEventListener('click',addTodo);
todolist.addEventListener('click',delCheck);
filter.addEventListener('click',filters);
document.addEventListener('DOMContentLoaded',getTodosBack);

 //ADDING NAME

//FUNCTIONS
function addTodo(e)
{
    e.preventDefault();
    
    //create a div
    const div = document.createElement('div');


    //create a li
    

    //create check and copleted buttons
    const li = document.createElement('li');
    const checkBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
   
        
    //adding value
    li.appendChild(document.createTextNode(todoInput.value));
     //adding i tag
    checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';



     //adding classes
     li.className = "todotext";
     div.className = "todo";
     checkBtn.className = 'checkbtn';
     deleteBtn.className = 'delbtn';
    
     
      //appending
     div.appendChild(li);

      div.appendChild(checkBtn);
     div.appendChild(deleteBtn);

    //append to ul
    todolist.appendChild(div);
     
    savetodostoLocal(todoInput.value)
    //clear inputs
    todoInput.value = "";



}

function delCheck(e)
{
    if(e.target.classList.contains('delbtn'))
    {   const todo = e.target.parentElement;
        todo.classList.add('gone');
       
        todo.addEventListener('transitionend',function()
        {
            todo.remove();
        });
    }
    else if(e.target.classList.contains('checkbtn'))
    {
        e.target.parentElement.classList.toggle("completed");
    }
}


function filters(e)
{
    const todos = todolist.childNodes;
    todos.forEach(function(todo)
    {
        switch(e.target.value)
        {
            case "all":
               todo.style.display = "flex";
                break;
            case "completed":
                    if(todo.classList.contains("completed"))
                    {
                        todo.style.display = "flex";
                    }
                    else
                    {
                        todo.style.display = "none";
                    }
                    break;
            case "uncompleted":
                        if(!todo.classList.contains("completed"))
                        {
                            todo.style.display = "flex";
                        }
                        else
                        todo.style.display = "none";
                        break;
        }
    });

}

function savetodostoLocal(todo)
{
    let todos;
    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    
}


function getTodosBack()
{
    let todos;
    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    todos.forEach(function(todo)
    {
        // e.preventDefault();
        //create a div
        const div = document.createElement('div');
    
    
        //create a li
        
    
        //create check and copleted buttons
        const li = document.createElement('li');
        const checkBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
       
            
        //adding value
        li.appendChild(document.createTextNode(todo));
         //adding i tag
        checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    
    
    
         //adding classes
         li.className = "todotext";
         div.className = "todo";
         checkBtn.className = 'checkbtn';
         deleteBtn.className = 'delbtn';
        
         
          //appending
         div.appendChild(li);
    
          div.appendChild(checkBtn);
         div.appendChild(deleteBtn);
    
        //append to ul
        todolist.appendChild(div);
     
    })
}





function removelocaltodos(todo)
{
    let todos;
    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos", JSON.stringify(todos));


}


// todos = ["uday", "sk", "is ", "not a ", 0];

// let todoIndex = todos.indexOf("0");

// todos.splice(todoIndex,1);
// console.log(todos);
