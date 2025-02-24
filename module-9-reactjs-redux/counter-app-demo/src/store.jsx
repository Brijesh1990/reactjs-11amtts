import React from "react";
import { createStore } from "redux"
const initialState= {
   count: 0
};

// create a generalised function of reducer
const reducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'INCREMENT':
            return {
                ...state,
                count:state.count + 1
            };
            
        case 'DECREMENT':
            return {
                ...state,
                count:state.count - 1
            };

         default :
          return state;   

    }

}


const store=createStore(reducer);
export default store