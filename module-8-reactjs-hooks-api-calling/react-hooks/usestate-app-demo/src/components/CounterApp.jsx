// import React,{Component} from 'react'
// class Employee extends Component
// {
//     render()
//     {
       
//         return(
//             <>
//               <h1>This is class based components</h1>
//             </>
//         )
//     }
// }

// class Department extends Employee 
// {
//     constructor(props)
//     {
//         super(props);
//         this.state={
//            id:1,
//            name:"brijesh",
//            department:"IT",
//            salary:89500
//         }
        
//     }
//     render()
//     {
      
//         return(
//             <>
//               <h2>My employee Id is : {this.state.id}</h2>
//               <h2>Employee name is {this.state.name}</h2>
//               <h2>Departments is {this.state.department}</h2>
//               <h2>I am earning a salary  {this.state.salary}</h2>
//             </>
//         )
//     }
// }

// export default Department


import React,{Component,useState} from 'react'
// import React,{Component,useState} from 'react'
class Employee extends Component
{       
    render()
    {
        return(
        
            <>
              <h1>This is class based components</h1>
            </>
        )
    }
}

class Department extends Employee 
{
 
 
    constructor(props)
    {

//     // destructure of data using useState
//    const[data,setData]=useState({        
//     id:1,
//     name:"brijesh",
//     department:"IT",
//     salary:89500
 
// });

        super(props);
        this.state={
           id:1,
           name:"brijesh",
           department:"IT",
           salary:89500
        }
        
    }
    render()
    {
      
        return(
            <>
              <h2>My employee Id is : {this.state.id}</h2>
              <h2>Employee name is {this.state.name}</h2>
              <h2>Departments is {this.state.department}</h2>
              <h2>I am earning a salary  {this.state.salary}</h2>
            </>
        )
    }
}

export default Department