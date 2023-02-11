console.log('Welcome to notes app. This is app .js');
shownotes();

// If user adds a note ,add it to the localstorage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){

    let addTxt=document.getElementById("addTxt");
    console.log(addTxt
        )
        let addTitle=document.getElementById("addTitle");
    console.log(addTxt
        )
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myobj={
       title: addTitle.value,
       text: addTxt.value
    }
    notesObj.push(myobj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";
   // console.log(notesObj);
    shownotes();  
})

// function to delete a notes
function deleteNote(index){
   // console.log('I am deleting',index);

    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}

// function to show elements from localStorage
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
       html+=`
       <div class="notesCard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">Note ${element.title}</h5>
         <p class="card-text">${element.text}</p>
         <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
       </div>
     </div> `;
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
     notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`Nothing to show! use "Add a Note" section above to add notes.`;
    }
}

let seach= document.getElementById('searchTxt');
seach.addEventListener("input",function(){
    
    let inputVal=search.value.toLowercase();
    //console.log('Input event fired!',inputVal);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        //console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})

