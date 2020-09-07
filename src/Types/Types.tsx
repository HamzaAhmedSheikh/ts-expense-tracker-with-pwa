 //initial state type

export type initialStateType = {
    Transaction: {
        id: number,
        text: string,
        amount: number,
    }[];

    deleteTransaction: (id: number) => void;
    addTransaction: (transaction: TransactionType) => void;
}

 //context/TransactionReducer Actions Type

 export type Actions =
  | { type: "Add_Transaction"; payload: TransactionType }
  | { type: "Delete_Transaction"; payload: number }
   
// transaction Type
 export type TransactionType = {
    id: number;
    text: string;
    amount: number;
};

 //components/Trasaction.tsx props type
 export type TransactionPropType = {
    trans: { id: number; text: string; amount: number };
  };

  export type expenseTrackerErrorType = {
    textError: string;
    AmountError: string;
  };




// export type transactionType = {
//     transaction: transType[]
// }

// export type transType = {
//     transid: number,
//     item: string,
//     amount: number
// }

// export type actionType = 
// | {type: 'ADD_TRANS', payload: transType}
// | {type: 'DELETE_TRANS', payload: number}