import React,{useState} from 'react'
import { Container,Row,Alert,Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import Header from './Header'
import Navbar from './Navbar'
import { Link,useNavigate } from 'react-router-dom'
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login=()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
    await logIn(email, password);
    navigate("/");
    } catch (err) {
    setError(err.message);
    }
    };
    
    // google login
    const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
    await googleSignIn();
    navigate("/home");
    } catch (error) {
    console.log(error.message);
    }   
}
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
<h2>Login Form</h2>
<h6> {error && <Alert variant="danger">{error}</Alert>}</h6>
<form onSubmit={handleSubmit}>
<div className='form-group mt-2'>
<input type='text' placeholder='Email *' className='form-control'   onChange={(e) => setEmail(e.target.value)}/>    
</div>
<div className='form-group mt-2'>
<input type='password' placeholder='Password *' className='form-control'  onChange={(e) => setPassword(e.target.value)}/>    
</div>


<div className='form-group mt-2'>
<input type='submit' placeholder='Email *' value="SignIn" className='btn btn-sm btn-primary text-white' />    
</div>


<div className='form-group mt-2'>
<b>don't have and account ?<Link to='/register'> Create account</Link></b>    
</div>
</form>
 <hr />
<div>
<GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn} />
</div>
</div>
</Row>
</Container>
</>
)
}
export default Login