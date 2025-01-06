import React from 'react'
export default function ForeachApp() {
    const data=[
        {
            'id':1,
            'name':'brijesh',
            'age':35
        },
        {
            'id':2,
            'name':'Rajesh',
            'age':35
        }
    ]
   
  return (
    <div>

     {data && data.map((item)=>{
        return (
            <>
              <h1>{item.name}</h1>
            </>
        )
     })}
      
  

    {/* {data && data.forEach((item)=>{
       return (
           <>
             <h1>{item.name}</h1>
           </>
       )
    })} */}
     

   


   </div>
  )
}
