var myVar;
function mainFunction()
{

    myVar=setTimeout("Display()",2300);
}

function Display()
{
    document.getElementById("loader-app").style="display:none";
    document.getElementById("main-section").style="display:block";
    
}