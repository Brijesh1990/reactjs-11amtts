import React from 'react'
import Data from './Data'
import { Container,Row } from 'react-bootstrap'
export default function GetEmployee() {
  return (
    <div>
      <Container>
       <h2>Details Of All employees</h2>
        <Row>
            {Data && Data.map((row)=>{
                return (
                    <>
                    <div className='col-md-3 ms-5 p-5 shadow'>
                     <address className='text-center'>
                     <p className=''><img src={row.photo} alt="img" className='img-fluid w-75' /></p>
                        <p className=''>{row.id}</p>
                        <p className=''>{row.name}</p>
                        <p className=''>{row.age}</p>
                        <p className=''>{row.profile}</p>
                       
                     </address>
                    </div>
                    </>
                )
            })}
        
        </Row>
      </Container>
    </div>
  )
}
