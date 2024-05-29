const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const notesContainer = document.querySelector(".notes-container");
const createButton = document. querySelector(".btn");
let notes = document.querySelectorAll(".input-note-box");

 function addTask(){
    if(inputBox.value=== ''){
        alert("You must add something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
 }  

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

 }, false)

 function saveData(){
    localStorage.setItem("data", listContainer.innerHtml);
 }
 function updateData(){
    localStorage.setItem("notes",notesContainer.innerHtml);
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    // notesContainer.innerHTML=localStorage.getItem("notes")
 }
//  showTask();

//  for notes //
createButton.addEventListener("click",()=>{
    let inputNotes = document.createElement("p");
    let img = document.createElement("img");
    inputNotes.className= "input-note-box";
    inputNotes.setAttribute("contenteditable","true");
    img.src= "delete.png";
    notesContainer.appendChild(inputNotes).appendChild(img);
}) 
 notesContainer.addEventListener("click",function(e){
    if(e.target.tagName=== "IMG"){
        e.target.parentElement.remove();
        updateData();
    }
    // else if(e.target.tagName==='P'){
    //     notes= document.querySelectorAll(".input-note-box");
    //     notes.forEach(nt => {
    //         nt.onkeyup = function(){
    //             updateData();
    //         }
    //     })
    // }
 })

 showTask();