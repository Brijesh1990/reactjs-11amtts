import React, { useState, useEffect } from "react";
import lazy from '../loader.gif'
export default function LoaderApp() {
  // initialised state via useState hook
  // destructured of state
  const [loader, setLoader] = useState(true);
  // useEffects hook to load loader
  useEffect(() => {
   
    setTimeout(()=>{

         setLoader(false)

    },3500)

  },[loader]); //render data one times

//   return (
//     // applied conditions
//     loader ? 
//       <>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <div className="spinner-border text-secondary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <div className="spinner-border text-success" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <div className="spinner-border text-danger" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <div className="spinner-border text-warning" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </>
//      : 
//       <div className="app">
//         <h1>We will comming Soon!</h1>
//       </div>
    
//   );
// }

return (
    // applied conditions
    loader ? 
      <>
      <img src={lazy} alt="loader"  />
      </>
     : 
      <div className="app">
        <h1>We will comming Soon!</h1>
      </div>
    
  );
}
