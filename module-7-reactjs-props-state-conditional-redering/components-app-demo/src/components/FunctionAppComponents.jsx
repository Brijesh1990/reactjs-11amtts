import React from 'react'
// components are re-usables with one components within another components
function Pet()
{
  const petname="Tiger";  
  return (
    <>
        <h1>My Pet Name is :{petname}</h1>
    </>
  )
}

function PetHouse()
{
   
    const pethousename="George villa pet house";
    return(
       
        <>
            <Pet />
            <h1>i have a petHouse name is :{pethousename}</h1>
        </>
    )

}

export default PetHouse;