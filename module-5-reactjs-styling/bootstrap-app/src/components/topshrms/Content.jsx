import React from 'react'
import {Container,Row,Card,CardHeader,CardBody } from 'react-bootstrap'
export default function Content() {
  return (
    <>
        <Container fluid className='p-4 mt-3'>
            <Row>
                <div className='col-md-6'>
                    <Card className='border border-1 border-danger'>
                        <CardHeader className='bg-danger text-white'><span className='bi bi-calendar'></span> <b>My Monthly Attendance</b></CardHeader>
                        <CardBody>
                         <Row>
                            <div className='col-md-7'>
                                <img src='https://cdn.vertex42.com/calendars/images/monthly-calendar-large-print.png' className='img-fluid' />
                            </div>
                            <div className='col-md-5'>
                             <table align='center' className='table table-responsive table-bordered'>
                                <tr align="center">
                                  <td colSpan={2}><b>Punch History</b></td>  
                                </tr>
                                <tr>
                                    <td>PunchDate</td>
                                    <td>PunchTime</td>
                                </tr>
                                <tr>
                                    <td>05-12-2024</td>
                                    <td>7:35am</td>
                                </tr>
                                <tr>
                                    <td>05-12-2024</td>
                                    <td>7:35am</td>
                                </tr>
                                <tr>
                                    <td>05-12-2024</td>
                                    <td>7:35am</td>
                                </tr>
                                <tr>
                                    <td>05-12-2024</td>
                                    <td>7:35am</td>
                                </tr>
                                <tr>
                                    <td>05-12-2024</td>
                                    <td>7:35am</td>
                                </tr>
                                <tr>
                                    <td>05-12-2024</td>
                                    <td>7:35am</td>
                                </tr>
                                <tr>
                                    <td>05-12-2024</td>
                                    <td>7:35am</td>
                                </tr>
                             </table>   
                            </div>
                         </Row>
                        </CardBody>
                    </Card>
                </div>
                
                <div className='col-md-6'>
                <Card className='border border-1 border-warning'>
                        <CardHeader className='bg-warning text-white'><span className='bi bi-calendar'></span> <b>My Pending Request</b></CardHeader>
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </div>

                <div className='col-md-6 mt-3'>
                <Card className='border border-1 border-primary'>
                        <CardHeader className='bg-primary text-white'><span className='bi bi-calendar'></span> <b>Celebrations</b></CardHeader>
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </div>

                <div className='col-md-6 mt-3'>
                <Card className='border border-1 border-info'>
                        <CardHeader className='bg-info text-white'><span className='bi bi-calendar'></span> <b>My Pending Request</b></CardHeader>
                        <CardBody>
                            
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    </>
  )
}
