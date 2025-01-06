import React from 'react'
const age=15;
export default function NestedApp() {
    if(age>=18)
    {
        if(age!==0)
        {   
        return <h1>I am eligible for voting</h1>
    }
}
    else 
    {
        
        return <h1>I am not eligible for voting</h1>
    }
  return (
    <div>
      
    </div>
  )
}
