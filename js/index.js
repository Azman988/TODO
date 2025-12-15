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
    document.querySelector('.js-text')
        .addEventListener('input', () => {
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

    // INPUT AND ICONS ENDED

    const autoTypeElement = document.querySelector('.qoute');
    const texts = ['Life without plan...', 'is Life without purpose.', 'Make plans,', 'chase dreams,', 'be purposeful.'];
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




    // Task header search icon interactivity 
document.querySelector('.search-icon').addEventListener('click', () => {
    document.querySelector('.task-header-icons').style.display = 'none'
    document.querySelector('.task-tab-dropdown').style.display = 'none'

    document.querySelector('.search-bar').style.display = 'block'
    document.querySelector('.search-bar').focus();
    
    document.querySelector('.cancel-icon').style.display = 'block'
})

    // Task header exit icon interactivity
document.querySelector('.cancel-icon').addEventListener('click', () => {
    document.querySelector('.task-header-icons').style.display = 'block'
    document.querySelector('.task-tab-dropdown').style.display = 'block'

    document.querySelector('.search-bar').style.display = 'none'
    
    document.querySelector('.cancel-icon').style.display = 'none'
})

    // Task header setting icon interactivity
const settingIcon = document.querySelector('.setting-icon');
    settingIcon.addEventListener('click', () => {
    const settingEl = document.querySelector('.setting')
    
    if (settingEl.style.display === 'none') {
        settingEl.style.display = 'block';
    } else {
        settingEl.style.display = 'none';
    }
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
            todoContainer.style.display = 'block';
            todoContainer.style.marginTop = '58px';
            todoContainer.style.height = '600px';

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
            todoContainer.style.display = 'none';
            //todoContainer.style.height = '30vh';
    }
}

    // avoiding small screen style on large screen
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


 //JSON.parse(localStorage.getItem('todo')) 
    //{id: 2, todoName: 'WORKOUT', dueTime: '07:00'}


    // array object handling function
function createTodo(todoName, dueTime) {
    return {
        id: Date.now() + Math.random(), // generate random numbers
        todoName,
        dueTime
    }
}

//

// variable with empty array.
    let todoList = [];
        // save the array object handling function in variable.
    let todo = JSON.parse(localStorage.getItem('todo')); 
    //|| createTodo('START EARLY', '05:00');
        // push the object handling function to the empty array.
    todoList.push(todo)

    renderHtml(); // function call
function renderHtml() {

    let todoHtml = '';

    todoList.forEach((value, index) => {
        html = `
            <div class="list-container">
                <p class="todo-name">${value.todoName}</p>
                <p class="todo-time">${value.dueTime}</p>
                <div class="mark_del-div">

                    <input type="checkbox" name="mark" class="checkbox" data-id="${value.id}">

                    <i class="fa-solid fa-trash-can del-icon" onclick="todoList.splice(${index}, 1);
                   renderHtml()
                   localStorage.setItem('todo', JSON.stringify(todo));"></i>
                </div>
            </div>`;
        todoHtml += html;
    })
    document.querySelector('.todo-tab').innerHTML = todoHtml;
};




        // create new array for the done tab
    const doneList = [];

        renderHtml2();
    function renderHtml2() {

            // target all the checkbox and loop throung each
        document.querySelectorAll('.checkbox')
            .forEach((todo) => {todo.addEventListener('change', (e) => {
                    // target the data id and save in variable
                const id = Number(e.target.dataset.id);

                    // use todoList to find each id and save too
                const clickedId = JSON.parse(localStorage.getItem('done')); 


                //todoList.find(value => value.id === id);
                    // push the id each id value to new array
                doneList.push(clickedId)

                    // generate html for each value
                let doneHtml = '';

                doneList.forEach((value) => {
                    html = `
                    <div class="done-list-container">
                        <input type="checkbox" name="mark" checked>
                        <p>${value.todoName}</p>
                        <p>${value.dueTime}</p>
                    </div>`

                    doneHtml += html;
                })
                
                    // add the generated html to DOM.
                document.querySelector('.done-tab').innerHTML = doneHtml;

                    // remove the container containing each value clicked
                setTimeout(() => {
                    e.target.closest('.list-container').remove();
                }, 600);

                localStorage.setItem('done', JSON.stringify(clickedId));
            })
        })
    }


    /*
        document.querySelectorAll('.del-icon').forEach((del) => {
                del.addEventListener('click', (e) => {
                    

                    const delId = Number(del.dataset.id)

                    const checked = todoList.find(value => value.id === delId);

                    checked.splice
                })
            })
    */



    // Submit tasks btn function
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
        todoList.push(createTodo(todoName, dueTime))
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

    renderHtml();   // recall 
    renderHtml2(); // recall checkbox function

    localStorage.setItem('todo', JSON.stringify(todo));
};

    // dropdown task tab switcher
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



    

