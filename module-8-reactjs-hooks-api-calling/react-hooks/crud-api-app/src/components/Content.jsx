import React from 'react'
import { Container } from 'react-bootstrap'
import taskimg from '../task.jpg'
export default function Content() {
return (
<div className=''>
<Container className='w-75 mt-5 p-5 mx-auto'>
<h1 className='text-center'>Task Managements</h1>
<div className='row'>
<div className='col-md-4'>
<h3>Task</h3>
<p>Task management is the process of successfully carrying out the initiation, planning, tracking, and closure of one or many tasks, making it a pivotal </p>
</div>
<div className='col-md-7 ms-5 shadow'>
<img src={taskimg} alt='task' className='img-fluid' />
</div>
</div>
</Container>
</div>
)
}
