import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid p-10 bg-black text-white flex flex-row'>
    <div className='p-4 w-2/12'>
        <ul>
            <li><a href='' className='text-3xl'>Links</a></li>
            <li><a href=''>About us</a></li>
            <li><a href=''>Contact us</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>Privacy & policy</a></li>
            <li><a href=''>Terms & conditions</a></li>
        </ul>
    </div> 

    <div className='ms-32 p-4 w-2/12'>
        <ul>
            <li><a href='' className='text-3xl'>Social Links</a></li>
            <li><a href=''>Facebook</a></li>
            <li><a href=''>Instagram</a></li>
            <li><a href=''>Whatsapp</a></li>
            <li><a href=''>Snapchat</a></li>
            <li><a href=''>Google</a></li>
        </ul>
    </div>    

    <div className='ms-32 p-4 w-4/12'>
        <ul>
            <li><a href='' className='text-3xl'>Our office Address</a></li>
            <li><a href=''>Facebook</a></li>
            <li><a href=''>Instagram</a></li>
            <li><a href=''>Whatsapp</a></li>
            <li><a href=''>Snapchat</a></li>
            <li><a href=''>Google</a></li>
        </ul>
    </div>    
    </div>
  )
}
