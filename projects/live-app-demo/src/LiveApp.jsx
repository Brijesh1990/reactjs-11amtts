import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function LiveApp() {
  return (
    <div>
      <Container className='shadow p-5 mt-5 w-75 mx-auto'>
        <Row>
            <div className='col-md-6'>
                <h2>Feedback To Us!</h2>
                <hr />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CO-r-CLI0i7UZJollGeOyXEkx1PW1nQxxw&s' className='img-fluid' />
            </div>
            <div className='col-md-5'>
                <input type='text' placeholder='Name *' className='form-control mt-3' />
                <input type='text' placeholder='Email *' className='form-control mt-3' />
                <input type='text' placeholder='Mobile *' className='form-control mt-3' />
                <input type='text' placeholder='Star *' className='form-control mt-3' />
                <input type='submit' placeholder='Send *' className='btn btn-sm btn-dark text-white mt-3' value="Send" />
            </div>
        </Row>
      </Container>
    </div>
  )
}
