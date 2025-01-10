import React,{Component} from 'react'
// class Pet extends Component
// {
//     render()
//     {
//         const petname="Tiger";
//         return(
//             <>
//                 <h1>I have a Pet its name is :{petname}</h1>
//             </>
//         )
//     }
// }

// class PetHouse extends Pet 
// {
//     render()
//     {
//         const pethouse="Patel pet house";
//         return(
//             <>
//                <Pet />   
//                 <h1>I have a Pet House Its name is :{pethouse}</h1>
//             </>
//         )
//     }
// }

// export default PetHouse


// class App extends Component
// {
//     constructor(props)
//     {
//          super(props);
//          this.state={
//             id:101,
//             name:"brijesh",
//             age:35,
//             salary:89500
//          }
//     }
//     render()
//     {
        
  
//         return(
//             <>
//                <h1>Employee name is :{this.state.name}</h1>
//                <h1>Employee age is :{this.state.age}</h1>
//                <h1>Employee salary is :{this.state.salary}</h1>
//             </>
//         )
//     }
// }

// export default App



// update any name 

class App extends Component
{
    constructor(props)
    {
         super(props);
         this.state={
            id:101,
            name:"brijesh",
            age:35,
            salary:89500
         }
   
    }

    // update a salary in this.state intialised object
    // update is used to setState is used to update current object values
    GetUpdate=()=>{
        this.setState({
            salary:115000,
            name:"rajesh"
    })
    }
    render()
    {
        
  
        return(
            <>
               <h1>Employee name is :{this.state.name}</h1>
               <h1>Employee age is :{this.state.age}</h1>
               <h1>Employee salary is :{this.state.salary}</h1>

               <button type='button' onClick={this.GetUpdate}>Get Updated salary</button>
            </>
        )
    }
}

export default App