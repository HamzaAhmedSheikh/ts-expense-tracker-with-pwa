import React, { useContext } from "react";

import { TransactionContext } from "../context/GlobalState";
import { TransactionPropType } from "../Types/Types";

 const Transaction: React.FC<TransactionPropType> = ({ trans }) => {

    const { deleteTransaction } = useContext(TransactionContext);

   return(
      <div>
        <button className="delete-btn" onClick={() => deleteTransaction(trans.id)}>
            {" "} X {" "}
        </button>  

        <div> {trans.text}  </div>

        <div>
          <h1>
            {trans.amount < 0 ? "-" : "+"}${Math.abs(trans.amount)}
          </h1>
        </div>

        <div
          className={` ${trans.amount < 0 ? "bg-red-600" : "bg-green-600" }`}
        ></div>

      </div> 
   ) 
 }


 export default Transaction;  
  
