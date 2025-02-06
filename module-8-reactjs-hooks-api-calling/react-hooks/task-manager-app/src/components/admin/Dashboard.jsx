import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import { Container,Row } from 'react-bootstrap'
export default function Dashboard() {
  return (
   <>
    <Container fluid className='m-0 p-0'>
     <Header />
     <Row>
     <div className='col-md-3'>
     <Sidebar />
     </div>
     <div className='col-md-9'>
        <Content />
     </div>
     </Row> 
    </Container>
   </>
  )
}
