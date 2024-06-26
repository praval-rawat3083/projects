const button = document.querySelector(".btn");
const input = document.querySelector("#input");
const div = document.querySelector(".container")


let list = document.createElement("ul");
div.append(list);
list.setAttribute("class","ul");


button.addEventListener("click",()=>{
    let li = document.createElement("li")
list.appendChild(li);
li.innerText= input.value;
li.setAttribute("class","li")
input.value="";
let crossbtn = document.createElement("button");
li.appendChild(crossbtn);
crossbtn.setAttribute("class","crossbtn")
crossbtn.innerText="X"
crossbtn.addEventListener("click",()=>{
   li.remove();

});

})





