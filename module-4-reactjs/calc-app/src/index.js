import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './style.css'
import 'animate.css'
var a=10;
var b=20;
var c=a+b;
var d=a-b;
var e=a/b;
var f=a*b;
var nm="shushil";
createRoot(document.getElementById("demo")).render(
    <StrictMode>
    <div className="app">
    <h1>Hey i am :{nm}</h1>
    <p>Hey i am paragraph</p>
    <hr />
    <p>The additions of numbers is :{c} <br /> The substractions of numbers is :{d} <br/> The divisions of numbers is :{e} <br /> The multiplications of numbers is :{f}</p>
    </div>
    
    </StrictMode>
)