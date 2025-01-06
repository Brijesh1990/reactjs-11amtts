import React from 'react'
const a=10;
const b=30;
const c=5;
export default function IfElseIfApp() {
    if(a>b && a>c)
    {
        return <h1>a is max numbers</h1>
    }
    else if(b>a && b>c)
    {
        
        return <h1>b is max numbers</h1>
    }
    else if(c>a && c>b)
        {
            
            return <h1>c is max numbers</h1>
        }

     else 
     {
        return <h1>Something went wrong</h1>
     }   
  return (
    <div>
      
    </div>
  )
}
