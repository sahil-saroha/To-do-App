let btn  = document.querySelector("button");
let ul  = document.querySelector("ul");
let inp  = document.querySelector("input");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText= inp.value;
  

    let dltbtn = document.createElement("button");
    dltbtn.innerText= "Delete";
    dltbtn.classList.add("delete");


    item.appendChild(dltbtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
   
})

ul.addEventListener("click" , function(event){
    if((event.target.nodeName)="BUTTON"){
       
    let listItem = event.target.parentElement;
    console.log(listItem);
    listItem.remove();
    }
   
   
})
// let dltbtn = document.querySelectorAll(".delete");
// for(dltbTn of dltbtn){
//     dltbTn.addEventListener("click" , function(){
//         let parent = this.parentElement;
//      parent.remove();
//     })
// }