import React from 'react'
import book from '../assets/images/book1.jpg'
export default function ExternalApp() {
  return (
    <>
        
       <div className='book-appointment'>
        <div className='book-img'>
        <img src={book} alt='book' />
        </div>
        <div className='book-form'>
          <h1>Book APpointment</h1>
          <hr align="left" />

          <form>
            <input type='text' placeholder='Enter Patient Name *' />
            <br/><br/>
            <input type='datetime-local' placeholder='Enter Appointment Date *' />
            <br/><br/>
            <select  placeholder='select doctors *'>
                <option value="">Dr.Brijesh</option>
                <option value="">Dr.Trupesh</option>
                <option value="">Dr.Tej</option>
            </select>
            <br/><br/>
            
            <textarea placeholder='type comments'></textarea>
            <br/><br/>
            <input type='submit' value="Book Appointment" />
          </form>  
        </div>
       </div>
    </>
  )
}
