// create a to do list 
const textInput=document.getElementById("textInput");
const taskList=document.getElementById("taskList");
const addBtn=document.getElementById("addBtn");
// click on button call addEventListener 
addBtn.addEventListener("click",function(){
 const textData=textInput.value.trim();
 if(textData!=="")
    {
        // call add data
        addTask(textData); //call a function
        textInput.value=""; //reset a input data
    }
    else 
    {
        Swal.fire({
            title: "!Oh",
            text: "You are not input any data",
            icon: "warning"
          });   
    }   
})

// create a function to add data 
function addTask(textData)
{
//  add a list via document.createElement(li)
const li=document.createElement("li");
li.innerHTML=`${textData} <button type="button" onclick="deleteTask(this)" class='btn btn-sm btn-danger text-white'>Remove</button>`;
taskList.appendChild(li);
Swal.fire({
    title: "",
    text: "Your Data successfully Added",
    icon: "success"
  });  

}

// create a deleteData
function deleteTask(button)
{
    const li=button.parentElement;
    taskList.removeChild(li);
    Swal.fire({
        title: "",
        text: "Your Data successfully Deleted",
        icon: "success"
      });   
}