import { TransactionType } from "../Types/ExpenseTrackerTypes";

 type Actions =
 | { type: "Delete_Transaction"; payload: number }
 | { type: "Add_Transaction"; payload: TransactionType };



 export default (state: { Transaction: TransactionType[] }, action: Actions ) => {
     switch(action.type) {
         case "Add_Transaction":
             return {
                 ...state,
                 Transaction: [action.payload, ...state.Transaction]
            };

         case "Delete_Transaction":
             return {
                 ...state,
                 Transaction: state.Transaction.filter(
                     (transaction) => transaction.id !== action.payload
                 ),                 
            };   
     }
 }
