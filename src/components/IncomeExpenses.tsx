import React, { useContext } from 'react';

import { TransactionContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

  const { Transaction } = useContext(TransactionContext);
  
  const amount = Transaction.map((trans) => trans.amount);

  const income: number = parseInt(
    amount.filter((a) => a > 0).reduce((v1, v2) => (v1 += v2), 0).toFixed(2)
  );

  const expense: number = parseInt(
    amount.filter((a) => a < 0).reduce((v1, v2) => (v1 += v2 * -1), 0).toFixed(2)
    );      
                 
                  
    return (
      <div className="inc-exp-container">
        <div>
          <h4> Income </h4> 
          <p id='money-plus' className="money-plus"> {income} </p> 
        </div>  

        <div>
          <h4> Expense </h4> 
          <p id='money-minus' className="money-minus"> {expense} </p> 
        </div>            
      </div>       
    )
}
