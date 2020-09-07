import React, { createContext, useReducer } from 'react'

import Reducer from './AppReducer'

 //types
 
import { TransactionType, initialStateType } from '../Types/ExpenseTrackerTypes';

 // create global state

   const initialstate: initialStateType = {
       Transaction: [{ id: 1, text: "Cash", amount: 200}],
       deleteTransaction: () => {},
       addTransaction: () => {},
   } 


  export const TransactionContext = createContext(initialstate);


 
//  export const TransactionProvider: React.FC = ({ children }) => {

//     const [state, dispatch] = useReducer(Reducer, initialstate)

     //Actions
    //Actions types is handiling in Reducer

//     function addTransaction(transactionData: TransactionType) {
//         dispatch({
//             type: "Add_Transaction",
//             payload: transactionData,
//         });        
//     }

//     function deleteTransaction(id: number) {
//         dispatch({
//             type: "Delete_Transaction",
//             payload: id,
//         });
//     }

//     return (
//       <div>
//          <TransactionContext.Provider value={{
//             Transaction: state.Transaction,
//             deleteTransaction,
//             addTransaction,
//          }}>
//             {children}
//          </TransactionContext.Provider>  
//       </div>
//     )
//  }