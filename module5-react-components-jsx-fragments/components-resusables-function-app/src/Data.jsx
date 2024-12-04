import React from "react";
var a=10;
var b=20;
var c=a+b;
var d=a*b;
var e=a/b;

function App()
{
return(
<>
<h1>The additions of numbers is :{c}</h1>          
</>
)
}

function AppData()
{
return(
<>
<App />
<h1>The multiplications  of numbers is :{d}</h1> 
</>
)
}
function Data()
{
return(
<>
<AppData/>
<h1>The divisions of numbers is :{e}</h1> 
</>
)
}

export default Data