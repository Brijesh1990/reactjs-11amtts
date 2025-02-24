import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Header from './Header'
import Navbar from './Navbar'
const Home=({count,increment,decrement})=> {
return (
<>
<Header />
<Navbar />
<Container>
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