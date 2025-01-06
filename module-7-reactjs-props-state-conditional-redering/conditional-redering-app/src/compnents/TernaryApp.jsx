import React from 'react'
const age=12;
export default function TernaryApp() {
    const chk=age>=18 ? <h1>I am eligible for voting</h1> : <h1>I am not eligible for voting</h1>
  return (
    <div>
      <h1>{chk}</h1>
    </div>
  )
}
