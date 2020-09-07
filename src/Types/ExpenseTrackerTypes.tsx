 //initial state type

export type initialStateType = {
    Transaction: {
        id: number,
        text: string,
        amount: number
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

  



