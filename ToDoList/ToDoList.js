let dataFrom = document.querySelector('#task');
let main = document.querySelector(".collection");
let Hey = document.querySelector("#hello");
let clearTask = document.querySelector(".clear-tasks");
let filter = document.querySelector("#filter");
//load all event listener
loadEventListener();

    function loadEventListener(){
      //Dom load event
    document.addEventListener('DOMContentLoaded', getTasks);
      //Adding task EventListener
    Hey.addEventListener('click',addTask);

      //Removing task EventListener
    main.addEventListener('click',removeTask);

      //Clear Task EventListener
    clearTask.addEventListener('click', clearTasks);

     //filtertask EventListener
    filter.addEventListener('keyup', filterTask);
    }

    //Get taks from ls
    function getTasks(){
      let toDoArr;
          if(localStorage.getItem('toDoArr') === null){
              toDoArr = []; 
          }else{
              toDoArr = JSON.parse(localStorage.getItem('toDoArr'));
          }

        toDoArr.forEach(function(task){
          let li = document.createElement("li");
          li.setAttribute("class","delu");
          var newIcon = document.createElement("i");
          newIcon.setAttribute("class","fa fa-remove");
          newIcon.style = "float :right";
          li.innerHTML += task;
          li.appendChild(newIcon);
          main.appendChild(li);
        });
    }

    // AddTask function
    function addTask(e){
     if(dataFrom.value!=""){
          let li = document.createElement("li");
          li.setAttribute("class","delu");
          var newIcon = document.createElement("i");
          newIcon.setAttribute("class","fa fa-remove");
          newIcon.style = "float :right";
          li.innerHTML += dataFrom.value;
          li.appendChild(newIcon);
          main.appendChild(li);
          //localStorage function
          storeToLocalStorage(dataFrom.value);
          
         document.querySelector('#task').value="";
           }
    } 

    //removeTask function
    function removeTask(e){
      e.target.parentElement.classList.contains("delu");
      e.target.parentElement.remove();

      // remove from Ls
      removeTaskFromLocalStorage(e.target.parentElement);
    }
    // remove from loacl storage
    function removeTaskFromLocalStorage(taskItem){
        let toDoArr;
        if(localStorage.getItem('toDoArr') === null){
              toDoArr = []; 
          }else{
              toDoArr = JSON.parse(localStorage.getItem('toDoArr'));
          }
          toDoArr.forEach(function(task,index){
            if(taskItem.textContent === task){
              toDoArr.splice(index,1);
            }       
          });
          localStorage.setItem('toDoArr',JSON.stringify(toDoArr));
    }
    //clearTasks function
    function clearTasks(){
        /*main.innerHTML="";*/
        while(main.firstChild){
          main.firstChild.remove();
        }
        localStorage.clear();
    }

    // filterTask function
    function filterTask(e){
      const text= e.target.value.toLowerCase();
      let allLi = document.querySelectorAll('.delu');
      allLi.forEach(function(i){
        const item = i.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
          i.style.display = "block";
        }else{
          i.style.display = "none"; 
      }
    }); 

    }
    
    // storeToLocalStorage function
    function storeToLocalStorage(newToDos){
     
          let toDoArr;
          if(localStorage.getItem('toDoArr') === null){
              toDoArr = [];
             
          }else{
           
              toDoArr = JSON.parse(localStorage.getItem('toDoArr'));
               console.log(typeof toDoArr);
          }
           toDoArr.push(newToDos);
           localStorage.setItem('toDoArr', JSON.stringify(toDoArr));        
    }