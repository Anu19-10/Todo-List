let butn=document.getElementById('btn');
let insert = document.getElementById('input');
let lst=document.querySelector(".list");


const getodo=()=>{
    return JSON.parse(localStorage.getItem('todoitem'));
}

const addtodolist=(todoarr)=>{
    return localStorage.setItem('todoitem',JSON.stringify(todoarr));
}

let todoarr=getodo() || [];

const getdynaminc=(curr)=>{
    let p=document.createElement("p");
    p.classList.add("main_div");
    p.innerHTML=`<li>${curr}</li> <button class="delete">DELTE</button>`;
    lst.appendChild(p);
}


const addlist=(e)=>{
      // to prevent the nature of the form
      e.preventDefault();

    const inarr=insert.value.trim();
   

    if(inarr!="" && !todoarr.includes(inarr)){

    todoarr=getodo() || [];

    todoarr.push(inarr);
    todoarr=[...new Set(todoarr)];

    localStorage.setItem('todoitem',JSON.stringify(todoarr));
   
    
  
  
   const values=insert.value;
    let p=document.createElement("p");
    p.classList.add("main_div");
    p.innerHTML=`<li>${insert.value}</li> <button class="delete">DELTE</button>`;
    lst.appendChild(p);
    
}
 insert.value="";
}

const showlist=()=>{

todoarr.forEach((curr)=>{
    getdynaminc(curr);
});

};
showlist();

const removelement=(e)=>{
    const del=e.target;
    let delet=del.previousElementSibling.innerText;
    let parentele=del.parentElement;
    

    todoarr=todoarr.filter((curr)=>{
        return curr!=delet.toLowerCase();
    })


    addtodolist(todoarr);
    parentele.remove();
}

lst.addEventListener('click',(e) => {
e.preventDefault();
if(e.target.classList.contains("delete")){
     removelement(e);
}

});

butn.addEventListener('click', addlist);
