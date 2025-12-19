    // Unuse code
    /*
    function countdown() {
        const now = new Date(); // CURRENT TIME

        const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

        const diff = endTime.getTime() - now.getTime();
        const diffInSeconds = diff / 1000;

        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);

        const seconds = Math.floor(diffInSeconds % 60);
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        requestAnimationFrame(countdown);
        return timeString
    }
    
    setInterval(countdown, 1000);







     Adding header to the todo Tab
    const todoTabH = document.createElement('p');
    todoTabH.textContent = 'TASKS';
    todoTabH.classList.add('todo-tab-head')
    document.querySelector('.todo-tab').prepend(todoTabH);







    

    */
    
    // INPUT AND ICONS STARTED
function textIcon(param) {
    const textEl = document.querySelector('.js-text');

    if (param === 'type') {
        textEl.focus();
    } else if (param === 'delete') {
        textEl.value = '';
        textEl.focus();
        textEl.classList.remove('focused');

        document.querySelector('.js-focus-icon').style.display = 'block'; 
        document.querySelector('.js-clear-icon').style.display = 'none';
    }
}
        // switch text icons on text input
function textIconSwitch() {
    document.querySelector('.js-text').addEventListener('input', () => {
        const focusIcon = document.querySelector('.js-focus-icon');
        const clearIcon = document.querySelector('.js-clear-icon');
        const textEl = document.querySelector('.js-text');

        if (textEl.value.trim() === '') {
            clearIcon.style.display = 'none';
            focusIcon.style.display = 'block';
            textEl.classList.remove('focused');
        } else {
            clearIcon.style.display = 'block';
            focusIcon.style.display = 'none';
            textEl.classList.add('focused')
        }
    })
}
textIconSwitch()
        
function renderTime() {
    // add bottom border color when text is inserted
    const timeEl = document.querySelector('.time')
    timeEl.addEventListener('input', () => {
        
            // add bottom border color
        if (document.activeElement !== timeEl) {
            timeEl.classList.remove('focused')
        } else {
            timeEl.classList.add('focused')
        }
    })

    timeEl.addEventListener('click', () => {
            // show time picker when clicked
        timeEl.showPicker();
            
        document.querySelector('.js-time-format').textContent = "24hrs Format Only";
            // takeout the format display
        setTimeout(() => {
        document.querySelector('.js-time-format').textContent = ''; 
        }, 3000)
    })

        // clock icon interactivity
    document.querySelector('.js-clock-icon').addEventListener('click', () => {
            timeEl.click(); // CLICK TIME INPUT
        })
}
renderTime();

    // qoute autotyping..
function autotyping() {
    const autoTypeElement = document.querySelector('.qoute');
    const texts = ['Life without plan...', 'is Life without purpose.', 'Make plans...', 'chase dreams...', 'be purposeful.'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function autoType() {
        const currentText = texts[textIndex];
        if (isDeleting) {
                autoTypeElement.textContent = currentText.substring(0, charIndex);
                charIndex--;
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        } else {
                autoTypeElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            if (charIndex >= currentText.length) {
                isDeleting = true;
            }
        }
        setTimeout(autoType, isDeleting ? 100 : 100);
    }

    autoType();
}
autotyping();

    // Task header search icon interactivity 
function searchIcon() {
    document.querySelector('.search-icon').addEventListener('click', () => {
        document.querySelector('.task-header-icons').style.display = 'none'
        document.querySelector('.task-tab-dropdown').style.display = 'none'

        document.querySelector('.search-bar').style.display = 'block'
        document.querySelector('.search-bar').focus();
        
        document.querySelector('.cancel-icon').style.display = 'block'
    })
}
searchIcon();

    // Task header exit icon interactivity
document.querySelector('.cancel-icon').addEventListener('click', () => {
    document.querySelector('.task-header-icons').style.display = 'block'
    document.querySelector('.task-tab-dropdown').style.display = 'block'

    document.querySelector('.search-bar').style.display = 'none'
    
    document.querySelector('.cancel-icon').style.display = 'none'
})

    //TODO INPUT CONTAINER EXPAND AND COLLAPSE FUNCTION
function expCol(param) {
    
    let collapseIcon = document.querySelector('.collapse-icon');
    let expandIcon = document.querySelector('.expand-icon');
    

    if (param === 'collapse') {

        expandIcon.style.display = 'block';
        collapseIcon.style.display = 'none';

            // collapse the input container
        const inputContainer = document.querySelector('.todo-input-container');
            inputContainer.style.height = '0';
            inputContainer.style.padding = '0';

            //to avoid INPUT content overflow and hide them
        const contentEl = document.querySelector('.content');
            contentEl.style.display = 'none';

            // to hide qoute div when list tab is displayed in small screen 
        const qouteDivEl = document.querySelector('.qoute-div');
            qouteDivEl.style.display = 'none';

            // raise the todo container height
        const todoContainer = document.querySelector('.todo-container')
            todoContainer.style.height = '95vh';

    } else if (param === 'expand') {

        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'block';

        const inputContainer = document.querySelector('.todo-input-container');
        inputContainer.style.height = 'fit-content';
        inputContainer.style.setProperty('padding', '40px 0');

            //to make INPUT content show again
        const contentEl = document.querySelector('.content');
            contentEl.style.display = 'block';

            // to show qoute div again when list tab is displayed in small screen 
        const qouteDivEl = document.querySelector('.qoute-div');
            qouteDivEl.style.display = 'block';

        const todoContainer = document.querySelector('.todo-container')
            todoContainer.style.height = '';
    }
}



    // avoiding small screen style on large screen
function windowResize() {
    window.addEventListener('resize', () => {
        // target hide and display icons
    let collapseIcon = document.querySelector('.collapse-icon');
    let expandIcon = document.querySelector('.expand-icon');
        // if screen size is greater than 610px 
    if (window.innerWidth > 610) {
        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'none';

        const inputContainer = document.querySelector('.todo-input-container');
                // reapply the normal styling
            inputContainer.style.height = 'fit-content';
            inputContainer.style.setProperty('padding', '40px 0');

            // reveal INPUT content overflow and show them
        const contentEl = document.querySelector('.content');
            contentEl.style.display = 'block';

            // show qoute div
        const qouteDivEl = document.querySelector('.qoute-div');
            qouteDivEl.style.display = 'block';

            // reapply the normal styling 
        const todoContainer = document.querySelector('.todo-container')
            todoContainer.style.marginTop = '';
            todoContainer.style.height = '600px';

    } else if (window.innerWidth < 611) {
        expandIcon.style.display = 'none';
        collapseIcon.style.display = 'block';

        const inputContainer = document.querySelector('.todo-input-container');
            inputContainer.style.height = 'fit-content';
            inputContainer.style.paddingTop = '55px';

            //to INPUT content display
        const contentEl = document.querySelector('.content');
            contentEl.style.display = 'block';

            // to show qoute div
        const qouteDivEl = document.querySelector('.qoute-div');
            qouteDivEl.style.display = 'block';

        const todoContainer = document.querySelector('.todo-container')
            todoContainer.style.marginTop = '';
            todoContainer.style.height = '600px';
            todoContainer.style.display = 'block';
    }
}) 
}
windowResize();


    // array object handling function
function createTodo(todoName, dueTime) {
    return {
        id: crypto.randomUUID(), // generate random id
        todoName,
        dueTime
    }
}

let todoList = JSON.parse(localStorage.getItem('todo')) || []; 

    renderHtml(); // display todo on page load.
function renderHtml() {

    let todoHtml = '';

    todoList.forEach((value, index) => {
        html = `
            <div class="list-container js-list-container-${value.id} js-list-container" data-list-container-id="${value.id}">
                <p class="todo-name">${value.todoName}</p>
                <p class="todo-time">${value.dueTime}</p>
                <div class="mark_del-div">
                    <input type="checkbox" name="check" class="checkbox" data-done-id="${value.id}">

                    <i class="fa-solid fa-trash-can del-icon" onclick="todoList.splice(${index}, 1);
                   renderHtml()
                   localStorage.setItem('todo', JSON.stringify(todoList));"></i>
                </div>
            </div>`;
        todoHtml += html;
    })
    document.querySelector('.todo-tab').innerHTML = todoHtml;

    editTodo()
};


let doneList = JSON.parse(localStorage.getItem('done')) || [];
    // Add interactivity to checkbox
function markDone() {
    document.querySelectorAll('.checkbox').forEach(checkBox => {
        checkBox.addEventListener('click', () => {
            const doneId = checkBox.dataset.doneId;

                // find the value clicked and push to doneList array
            let newId = todoList.find(lists => lists.id === doneId)

            doneList.push(newId);

            localStorage.setItem('done', JSON.stringify(doneList));

                // extract the clicked value from mother array and save the remaining to a diff div
            newTodoList = [];
            todoList.forEach(lists => {
                if (doneId !== lists.id) {
                    newTodoList.push(lists)
                }
            })

            todoList = newTodoList;

                // remove the value container from the UI
            //let container = document.querySelector(`.js-list-container-${doneId}`);
            //container.remove();

            localStorage.setItem('todo', JSON.stringify(todoList));

            renderDoneHtml()
        })
    })
}
markDone();

function renderDoneHtml() {
    let html = '';

    doneList.forEach((todo, index) => {
        html += `
            <div class="done-list-container">
                <input type="checkbox" name="uncheck-todo" checked>
                <p class="todo-name">${todo.todoName}</p>
                <p>${todo.dueTime}</p>
                <i class="fa-solid fa-trash-can del-icon" onclick="doneList.splice(${index}, 1);
                   renderDoneHtml()
                   localStorage.setItem('done', JSON.stringify(doneList));"></i>
            </div>`
    });
    document.querySelector('.done-tab').innerHTML = html;
}
renderDoneHtml();

    // edit todo function
function editTodo() {
    document.querySelectorAll('.js-list-container').forEach(list => {
        list.addEventListener('click', () => {
            const containerId = list.dataset.listContainerId;

            let todo;
            let time;

            todoList.forEach(value => {
                if (value.id === containerId) {
                    todo = value.todoName;
                    time = value.dueTime;
                }
            })

            const textEl = document.querySelector('.js-text');
            if (todo !== undefined) {
                textEl.value = todo;
            }

            const timeEl = document.querySelector('.time');
            if (time !== undefined) {
                timeEl.value = time;
            }

            document.querySelector(`.js-list-container-${containerId}`).remove();

            let newTodoList = [];

            todoList.forEach(value => {

                if (containerId !== value.id) {
                    newTodoList.push(value);
                }
                todoList = newTodoList;

                localStorage.setItem('todo', JSON.stringify(todoList));
            })
        })
    })
}
editTodo();

    // Add interactivity to checkbox Submit btn..
function submitBtn()  {
    setTimeout(() => {
        document.querySelector('.submit-text').style.display = 'none';
    }, 900)

    const textEl = document.querySelector('.js-text');
    todoName = textEl.value.toUpperCase();
    const timeEl = document.querySelector('.time');
    dueTime = timeEl.value;
    
        // Only add task if there are text inputs
    if (textEl.value.trim() !== '' && timeEl.value !== '') {
            // recall the push function.
        todoList.push(createTodo(todoName, dueTime));
        document.querySelector('.submit-text').style.display = 'block';
    }

    textEl.value = '';
    timeEl.value = '';

    if (textEl.value === '') {
        document.querySelector('.js-focus-icon').style.display = 'block'; 
        document.querySelector('.js-clear-icon').style.display = 'none';

        textEl.classList.remove('focused');
    }

    if (timeEl.value === '') {
        timeEl.classList.remove('focused');
    }

    renderHtml(); 
    markDone();

    localStorage.setItem('todo', JSON.stringify(todoList));
};

    // dropdown task tab switcher
function switchTodoTab() {
    document.querySelector('.task-tab-dropdown')
    .addEventListener('change', (e) => {
        if (e.target.value === "unfinished") {
            document.querySelector('.done-tab').style.display = 'none';
            document.querySelector('.todo-tab').style.display = 'flex';
        } else if (e.target.value === "finished") {
            document.querySelector('.done-tab').style.display = 'flex';
            document.querySelector('.todo-tab').style.display = 'none';
        }
    })
}
switchTodoTab();
    



    

