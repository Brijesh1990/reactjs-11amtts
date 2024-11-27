// import React from "react";
// import ReactDOM from 'react-dom/client'
// const root=ReactDOM.createRoot(document.getElementById("demo-app"));
// root.render(
//     <h1>Hello shushil kumar</h1>
// )

// import React from "react";
// import ReactDOM from 'react-dom/client'
// var nm="Hello shushil kumar";
// const root=ReactDOM.createRoot(document.getElementById("demo-app"));
// root.render(
//     <h1>My name is :{nm}</h1>
// )


// import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client'
// var nm="Hello shushil kumar";
// const root=ReactDOM.createRoot(document.getElementById("demo-app"));
// root.render(
    
//     <StrictMode>
//         <h1>My name is :{nm}</h1>
//     </StrictMode>
// )





// import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client'
// var nm="Hello shushil kumar";
// const root=ReactDOM.createRoot(document.getElementById("demo-app"));
// root.render(
    
//     <StrictMode>
//         <h1>My name is :{nm}</h1>
//     </StrictMode>
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
var nm="Hello shushil kumar";
var a=10;
var b=20;
var c=a+b;
createRoot(document.getElementById("demo-app")).render(
    <StrictMode>
        <h1>My name is :{nm}</h1>
        <h3 style={{fontSize:"45px",color:"green"}}>Additions of numbers is :{c}</h3>
    </StrictMode>
)
