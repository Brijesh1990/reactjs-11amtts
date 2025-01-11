import React,{Component,useState} from "react";

// // props data accessed 
class Employee extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id:1,
            name:"brijesh"
        }
    }
    render()
    {
        return (
            <>
              <h1>My name is :{this.state.name}</h1> 
            </>
        )
    }
}

// intialised in state
// class Employee extends Component
// {
//     constructor(props)
//     {
//         super(props);
//         const[data,setData]=useState(""); 
//     }
//     render()
//     {
//         return (
//             <>
//               <h1>My name is :{this.state.name}</h1> 
//             </>
//         )
//     }
// }

export default Employee