import React from 'react'
export default function Animations() {
  return (
    <>
         
         <div className='w-128 bg-red-900 p-20 mx-auto mt-20'>
            <h1 className='tex-center text-4xl ms-11 text-white animate-bounce'>Register Now</h1>
            <hr className='border border-dotted w-32 ms-11' />
            <br />
            <form className='p-5'>
                <input type='text' placeholder='Email *' className='p-2 w-64' />
                <br /><br/>
                <input type='submit' value="Register" className='bg-black text-white border-0 p-3 w-60' />
            </form>
         </div>

    </>
  )
}
