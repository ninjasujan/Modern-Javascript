 
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// generate template string
const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
                </li>`;
    list.innerHTML += html;
}

// adding to new todo
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim().toLowerCase();
    if(todo.length) {
        console.log(todo);
        generateTemplate(todo);
        addForm.reset(); // reset used to clear all input control
    }      
});

// removing the todo - event delegation
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


// search for todo..

const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
}
// keyup event
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});


