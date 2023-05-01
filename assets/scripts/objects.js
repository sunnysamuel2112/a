const favtodo = document.getElementById('title')
const extInfo = document.getElementById('extra-name')
const extVal = document.getElementById('extra-value')


//console.log(favtodo,extInfo,extVal)
const clearAll = document.getElementById('clearall-btn')
const todobtn = document.getElementById('add-todo-btn')
const addtodo =document.getElementById('add-todo-btn')
addtodo.addEventListener('click', () => {


    const req_favmov = document.getElementById('requiredfavmov')

    if (favtodo.value === "" ){
        req_favmov.innerText="required"
        req_favmov.style.color = 'red'
        console.log("empty")

    }else{
        req_favmov.innerText=""
        console.log("not empty")
    }
    // console.log('clicked' + todobtn)
    console.log(favtodo,extInfo,extVal)
    const todoList = document.getElementById('show-list')
    const todoLi = document.createElement('label')
    todoList.appendChild(todoLi)
    todoLi.innerText= favtodo.value
    favtodo.value = ""
    extInfo.value = ""
    extVal.value = ""
}

)



//todoList.innerHTML=`<li>${favtodo.value} ${extInfo.value} ${extVal.value} </li>`


//console.log(todobtn)