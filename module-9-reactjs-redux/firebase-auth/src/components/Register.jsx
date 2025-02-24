import React,{useState} from 'react'
import { Container,Row,Alert} from 'react-bootstrap'
import { connect } from 'react-redux'
import Header from './Header'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [password, setPassword] = useState("");
const { signUp } = useUserAuth();
let navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
setError("");
try {
await signUp(email, password);
navigate("/login");
} catch (err) {
setError(err.message);
}
};
    

return (
<>
<Header />
<Navbar />
<Container>
<Row>
<div className='col-md-5 p-5'>
<h3>Create Account</h3>
<p>Create account using firebase This is a google cloud services i.e used to stored data on google cloud and it is also used to authenticate multiple users</p>

</div>
<div className='col-md-7 p-5'>
<h2 className='text-center'>Register Form</h2>
<h6 className='text-center'>{error && <Alert variant="danger">{error}</Alert>}</h6>
<form onSubmit={handleSubmit}>
<div className='form-group mt-2'>
<input type='text' placeholder='Email *' className='form-control' onChange={(e) => setEmail(e.target.value)} />    
</div>
<div className='form-group mt-2'>
<input type='password' placeholder='Password *' className='form-control' />    
</div>

<div className='form-group mt-2'>
<input type='password' placeholder='Confirmed Password *' className='form-control'  onChange={(e) => setPassword(e.target.value)}/>    
</div>


<div className='form-group mt-2'>
<input type='submit' placeholder='Email *' value="SignUp" className='btn btn-sm btn-primary text-white' />    
</div>


<div className='form-group mt-2'>
<b>Already have and account ?<Link to='/login'> Login here</Link></b>    
</div>
</form>
</div>
</Row>
</Container>
</>
)
}
export default Signup