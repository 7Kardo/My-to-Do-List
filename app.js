window.addEventListener('load',showTasks)
let addBtn = document.querySelector('button');
let taskList = document.querySelector('ul')
let input = document.querySelector('input');
let tasks;

if(!localStorage.getItem('todo')){
    tasks = [];
}else{
    tasks = getTasks();
}

// Event-Listener für das Hinzufügen von Aufgaben

addBtn.addEventListener('click',()=>{
    let text = input.value;
    let task = createTask(text);
    if(input.value===''){
                alert('Bitte geben Sie einen Wert ein!');
             }else{
                         task.innerHTML += `<span class="closeBtn"><i class='bx bxs-trash'></i></span>`;
                         taskList.appendChild(task);
                         saveTasks(text)
                         input.value = '';
                         input.focus();
                        }
})

taskList.addEventListener('click',(e)=>{
    if(e.target.nodeName ==='I'){
        e.target.parentElement.parentElement.style = 'display:none';
    }
    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('text');
    }
})

function createTask(text){
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}
 
function saveTasks(text){
    tasks.push(text);
    localStorage.setItem('todo',tasks)
}
function getTasks(){
    return localStorage.getItem('todo').split(',');
}
function showTasks(){
    for (let taskText of getTasks()){
        let task = createTask(taskText);
        task.innerHTML += `<span class="closeBtn"><i class='bx bxs-trash'></i></span>`;
        taskList.appendChild(task);

    }
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click(); 
    }
});