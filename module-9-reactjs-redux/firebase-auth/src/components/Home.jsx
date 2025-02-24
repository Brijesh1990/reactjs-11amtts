import React from 'react'
import { Container,Row,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import Header from './Header'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";

const Home=({count,increment,decrement})=> {

// const { logOut, user } = useUserAuth();
// const navigate = useNavigate();
// const handleLogout = async () => {
//   try {
//    await logOut();
//    navigate("/login");
//   } catch (error) {
//    console.log(error.message);
//   }  
// };

return (
<>
<Header />
<Navbar />
<Container>
{/* 
<h4 className='mt-4 text-center'>Welcome : {user && user.email}   </h4>
<Button variant="primary" onClick={handleLogout}>Log out</Button> */}

<Row>
<div className='col-md-5 p-5'>
<h3>Redux counter App</h3>
<p>React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.</p>
</div>
<div className='col-md-7 p-5'>
<h2>Home Page with inc/dec</h2>
<h3>The count of values is : {count}</h3>
<p><button type='button' onClick={increment}  className='btn btn-success text-white bg-success ms-2'>Increment</button>

<button type='button' onClick={decrement} className='btn btn-success text-white bg-success ms-2'>Decrement</button>

</p>
</div>
</Row>
</Container>
</>
)
}

const mapStateToProps=state=>({
    count:state.count
    
    })
    
    const mapDispatchToProps=dispatch=>({
    
    increment:()=>dispatch({type:'INCREMENT'}),
    decrement:()=>dispatch({type:'DECREMENT'}),
    })
    

export default connect(mapStateToProps,mapDispatchToProps)(Home);