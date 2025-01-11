import React from "react";
function MyApp(props)
{
    return (
        <>
           <h1>Our Car name is  :{props.car}</h1> 
        </>
    )
}

function PropsApp()
{
    return (
       
        <>
         <MyApp car="Mercedees" />
         <h2>My car living in My garage</h2>
        </>
    )

}

export default PropsApp