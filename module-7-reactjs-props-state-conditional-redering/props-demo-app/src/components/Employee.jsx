import React,{Component} from 'react'
class Employee extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id:1,
            name:"brijesh",
            age:35,
            salary:89500
        }

        this.state={
            id:2,
            name:"brijesh",
            age:35,
            salary:11500
        }

    }
    render()
    {
        return(
            <>
              <h1 align='center'>My id is :{this.state.id}</h1>
              <h1 align='center'>My name is :{this.state.name}</h1>
              <h1 align='center'>My age is :{this.state.age}</h1>
              <h1 align='center'>My salary is :{this.state.salary}</h1>
              
            </>
        )
    }
}

export default Employee