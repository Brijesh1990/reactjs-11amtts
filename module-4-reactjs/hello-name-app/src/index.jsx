import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '../public/assets/css/style.css'
var nm="brijesh";
var a=20;
var b=30;
var c=a*b;
var d=a-b;
createRoot(document.getElementById("demo-app")).render(
    <StrictMode>

        <div className="app">
        <h1>Hey :{nm}</h1>
        <h2>Multiplications of numbers is : {c}</h2>
        <hr />
        <p>The substractions of numbers {d}</p>
        </div> 
        
    </StrictMode>
)