// navbar toggler
const menu=document.querySelector("#menu");
const btnToggle=document.querySelector("#btn-toggle");
const menuList=document.querySelector("#menu-list");
btnToggle.addEventListener("click",function(){
    menuList.classList.toggle("active");
});
// add to do list enable button
function toggleButton(ref,idBtn)
{
    document.getElementById(idBtn).disabled=false;
}
// add items call a window.onload method 
window.onload=()=>{
    const form1=document.querySelector("#addForm");
    const items=document.getElementById("items");
    edititem=null;
    form1.addEventListener("submit",additem);
    items.addEventListener("click",removeitem);
   
    
}

// add items function 
function additem(e)
{
    e.preventDefault(); //its prevent redirection for another page   
 // edit data 
 if(submit.value!="Submit")
 {
    edititem.target.parentNode.childNodes[0].data=document.getElementById("item").value;
    submit.value="Submit";
    document.getElementById("item").value="";  
   Swal.fire({
         title: "success!",
         text: "Data edited successfully",
         icon: "success"
    });
    return false;
 }    
// add new items 
const newitem=document.getElementById("item").value;    
if(newitem.trim()=="" || newitem.trim()==null)
{
// alert('Please enter Your items here')
Swal.fire({
title: "Somthing went wrong!",
text: "Please do not used blanks!",
icon: "warning"
});
document.addForm.item.focus();
return false;
}
else 
{

document.getElementById("item").value="";
let li=document.createElement("li");
//alert('hi');
li.className="list-group-item";
// add new items using createTextNode
li.appendChild(document.createTextNode(newitem));
//    alert('Thanks for added new Items');
// pass swal alert messages 
Swal.fire({
title: "Good job!",
text: "Thanks for addedd New Items!",
icon: "success"
});
// data or items read here or display here  
items.appendChild(li);
// li add a deleteButton
let deleteButton=document.createElement("button");
deleteButton.className="btn btn-sm btn-danger border border-0 text-white float-end delete";
deleteButton.appendChild(document.createTextNode("delete"));
li.appendChild(deleteButton);
// li add a editButton  

let editButton=document.createElement("button");
editButton.className="btn btn-sm btn-info border border-0 text-white float-end edit me-2";
editButton.appendChild(document.createTextNode("edit"));
li.appendChild(editButton);      
}

}


// remove items 
function removeitem(e)
{
    e.preventDefault();
    if(e.target.classList.contains("delete"))
    {
    if(confirm('Are you sure to delete Items form List'))
    {  
    //remove a data from items 
    let li=e.target.parentNode;
    items.removeChild(li);
            Swal.fire({
            title: "Good job!",
            text: "Thanks for Deleted  Items!",
            icon: "success"
          });
       
    }
    else 
    {
        Swal.fire({
            title: "Oh! Something went wrong!",
            text: "Not able to deleted Items",
            icon: "error"
          });
        return false;
    }
}
//data edit in items 
if(e.target.classList.contains("edit"))
{
    document.getElementById("item").value=e.target.parentNode.childNodes[0].data;
    submit.value="EDIT";
    edititem=e;

}
   
    
}