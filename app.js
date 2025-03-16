
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');


btn.addEventListener('click',()=>{
    const li = document.createElement('li');
    if(input.value===''){
        alert('Bitte geben Sie einen Wert ein!');
    }else{
         li.textContent = input.value;
         li.innerHTML += `<span class="closeBtn"><i class='bx bxs-trash'></i></span>`
         list.appendChild(li);
         input.value = '';
         input.focus();
    }
   
   // Event-Listener für das Durchstreichen
    li.addEventListener('click',()=>{
        li.classList.toggle('text');
    })
    
   // Event-Listener für das Löschen
    list.addEventListener('click',(e)=>{
        if(e.target.tagName ==='I'){
            e.target.parentElement.parentElement.remove();

        }
    })
})

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btn.click(); 
    }
});