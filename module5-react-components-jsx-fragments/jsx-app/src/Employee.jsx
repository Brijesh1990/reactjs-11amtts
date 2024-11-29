import React from "react";
var nm="Brijesh kumar pandey"
var a=10;
var b=20;
var c=a+b;
var d=a*b;

function Employee()
{
    return(
        // fragments : fragements are used to access multple html jsx data
        // <></>  or <div></div>  or <React.Fragment></React.Fragment> 

        // <>
        //   <h1>My name is :{nm}</h1>
        //   <h1>Additions of numbers is :{c}</h1>
        //   <h1>Multiplications of numbers is :{d}</h1>

        // </>

        // <div>
        // <h1>My name is :{nm}</h1>
        // <h1>Additions of numbers is :{c}</h1>
        // <h1>Multiplications of numbers is :{d}</h1>
        // </div>

        <React.Fragment>
    
        <h1>My name is :{nm}</h1>
        <h1>Additions of numbers is :{c}</h1>
        <h1>Multiplications of numbers is :{d}</h1>
    
        </React.Fragment>
        
    )
}
export default Employee