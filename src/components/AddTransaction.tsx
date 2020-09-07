import React, { useState, useContext } from 'react';

import { TransactionContext } from '../context/GlobalState';
import { expenseTrackerErrorType } from '../Types/Types';



export const AddTransaction = () => {

    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [error, setError] = useState<expenseTrackerErrorType>({
      textError: "",
      AmountError: "",
    });

    const { addTransaction } = useContext(TransactionContext);

    const OnSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (text === "") {
        setError({ ...error, textError: "block" });
        return false;
      }
      if (amount === 0) {
        setError({ ...error, AmountError: "block" });
        return false;
      } else {
        const newTransAdd = {
          id: Math.floor(Math.random() * 1000),
          text,
          amount: +amount,
          //   amount: amount,  text and amount both methods are same things
        };
        setText("");
        setAmount(0);
        addTransaction(newTransAdd);
      }
    };
     
     

    return (
      <div className=" w-6/12 mx-auto mt-6 max-w-sm">
        <h3> Add new Transaction </h3>         

         <form onSubmit={OnSubmit}>
         <div className='form-control'>
          <label htmlFor='text'> Text </label>          
            <input  
              type="text"            
              placeholder="Enter Text..."
              value={text}
              onChange={(e) => {
                setText(String(e.target.value));                
              }}
              
            />       
          
        </div>

        <div className='form-control'>
          <label htmlFor='amount'> Amount </label>          
            <input
              type="number"
              className="w-full rounded-sm py-1 px-2 outline-none"
              placeholder="Enter Amount..."
              value={amount === 0 ? "" : amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));                
              }}
              
            />        
          
        </div>

        <div className="block">
          <input
            className={`my-3 px-6 py-2 bg-blue-600 text-white w-full rounded-md ouline:none cursor-pointer focus:outline-none `}
            type="Submit"
          />
        </div>
      </form>
    </div>
  );
};
        
    