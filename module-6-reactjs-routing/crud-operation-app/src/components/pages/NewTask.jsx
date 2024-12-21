import React from 'react'
import account from '../../task1.png'
export default function NewTask() {
return (
<div className='modal fade' id='newtask' role='dialog'>
<div className='modal-dialog' style={{maxWidth:"45%"}}>
<div className='modal-content'>
<div className='row'>
<div className='col-md-5 p-5 new-task'> <img src={account} alt='task' className='img-fluid mt-5' /></div>
<div className='col-md-7 p-5'> 
<h3>Add Your Task</h3>
<hr className='w-25' /> 
<form>
<div className='form-group mt-2'>
<input type='text' placeholder='Upload Task image *' className='form-control' />
</div>

<div className='form-group mt-3'>
<input type='text' placeholder='Enter Task Name *' className='form-control p-2' />
</div>
<div className='form-group mt-3'>
<input type='text' placeholder='Asign To *' className='form-control p-2' />
</div>

<div className='form-group mt-3'>
<input type='date' placeholder='Added Date *' className='form-control p-2' />
</div>

<div className='form-group mt-3'>
<input type='submit' className='btn btn-md btn-primary text-white' /> 
<input type='reset' className='btn btn-md btn-danger text-white ms-3' />
</div>

</form>
</div>
</div>

</div>
</div>
</div> 

)
}
