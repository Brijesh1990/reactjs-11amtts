import React from 'react'
import item from './DataAdd'
export default function Data() {
  return(
    <>
        <h1 className='ms-5'>Grocery Shoping</h1>
            {item && item.map((items)=>{

                return(
                    <>
                    <div className='w-75 mx-auto ms-5'>
                    <table border={1} className='table table-responsive table-bordered p-2'>
                        <tr>
                        <td>{items.name}</td>
                        <td className='text-end'><a href='' className='btn btn-sm  bg-danger text-white'>Delete</a> |<a href='' className='btn btn-sm  bg-primary text-white'>Edit</a> </td>

                        </tr>
                        
                    </table>
                    </div>
                    </>
                )

            })
            }
    </>
  )
}
