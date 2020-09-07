import React, { useState, useContext } from 'react';

import { TransactionContext } from '../context/GlobalState';




export const AddTransaction = () => {

    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);    

    const { addTransaction } = useContext(TransactionContext);

    const OnSubmit = (e: { preventDefault: () => void }) => {

      e.preventDefault();

        const newTransAdd = {
          id: Math.floor(Math.random() * 1000),
          text,
          amount: +amount,
          //   amount: amount,  text and amount both methods are same things
        };

        setText("");
        setAmount(0);
        addTransaction(newTransAdd);
      
    };
     
     

    return (
      <div>
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
          <label htmlFor='amount'> Amount <br /> ( negative - expense, positive - income )       </label>          
            <input
              type="number"              
              placeholder="Enter Amount..."
              value={amount === 0 ? "" : amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));                
              }}
              
            />        
          
        </div>

        <div className="block">
          <input
            className="btn"
            type="Submit"
          />
        </div>
      </form>
    </div>
  );
};
        
    