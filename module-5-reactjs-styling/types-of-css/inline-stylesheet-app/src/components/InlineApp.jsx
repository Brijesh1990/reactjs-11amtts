import React from "react";
const nm="Brijesh";
function InlineApp()
{
    return(
        <>

            <div style={{color:"blue",backgroundColor:"lightgray", width:"30%", padding:"25px", height:"auto",margin:"auto",marginTop:"5%"}}>
                <h1>Hey i am { nm }</h1>
                <p> using inline stylesheet</p>
            </div>
        </>
    )
}
export default InlineApp
