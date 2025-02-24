import React,{useState} from 'react'
import { Container,Alert } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';

export default function Login() {

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
  navigate("/admin-login/dashboard");
  } catch (err) {
  setError(err.message);
  }
};

  return (
    <div>
         {/* content */}
      <Container className='w-50  p-3 mt-5 bg-white top-0'>
      <div className='row'>
      <div className='col-md-4'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7sYxASPkjlolGjGvGoxnP-CCF7S-1kfHsQ&s' className='img-fluid' /></div>
      <div className='col-md-8'>
      <h1 className='fs-4'>Admin Login</h1>
      <hr />
      <h6> {error && <Alert variant="danger">{error}</Alert>}</h6>

      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
      <span className="input-group-text bi bi-inbox" id="basic-addon1"></span>
      <input type="text"  className="form-control" placeholder="Enter email *" aria-label="Username" aria-describedby="basic-addon1"   onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text bi bi-lock" id="basic-addon1"></span>
      <input type="text"  className="form-control" placeholder="Enter Password *" aria-label="Username" aria-describedby="basic-addon1"  onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="input-group mb-3">
    
      <button type="submit" className="btn btn btn-md btn-warning text-dark">Login <span className='bi bi-caret-right-fill'></span></button>
      <b className='ms-2'><Link to="">Forget Password ?</Link></b>
      </div>
      </form>
     </div>
     </div>
 
      </Container>
    </div>
  )
}
