import React, { useContext } from "react";

import { TransactionContext } from "../context/GlobalState";
import { TransactionPropType } from "../Types/ExpenseTrackerTypes";

 const TransactionDel: React.FC<TransactionPropType> = ({ trans }) => {

    const { deleteTransaction } = useContext(TransactionContext);

    const sign = trans.amount < 0 ? '-' : '+';

   return(
     <li className={trans.amount < 0 ? 'minus' : 'plus'}>
       { trans.text } 

       <span>
          {sign} 
          ${Math.abs(trans.amount)}
       </span>  

       <button onClick={() => deleteTransaction(trans.id)}
               className="delete-btn">  
             x
       </button>
     </li>      
   ) 
 }


 export default TransactionDel;  
  
