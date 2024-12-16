import React from 'react'
export default function Header() {
  return (
    <div className='container-fluid p-5 shadow'>
    <div className='flex flex-row'>
        <div className='w-96'>
            <strong>Call us :(+91)-9998003879</strong>
        </div>
        <div className='w-full ms-32'>
            <form>
                <input type='text' placeholder='search anything here' className='p-2 border border-spacing-1 w-3/4 ms-11' />
            </form>
        </div>

        <div className='w-96'>
          <button type='button' className='bg-slate-900 p-2 text-white'>Create Account</button>
        </div>
    </div>
    </div>
  )
}
