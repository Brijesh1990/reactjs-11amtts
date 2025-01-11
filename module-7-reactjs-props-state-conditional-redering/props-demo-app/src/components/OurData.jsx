import React from "react";
function Car(props)
{

    // return <h1>i am a {props.brand.model}</h1>
    return <h1>i am a {props.name.brand}</h1>

}

function GarageApp()
{
    // assign objects 
    const cardetails={
        name:"maruti alto 800",
        brand:"Maruti suzuki",
        model:2025
    };
    return (
        <>
         {/* <Car brand={cardetails} /> */}
         <Car name={cardetails} />
        </>
    )
}

export default GarageApp