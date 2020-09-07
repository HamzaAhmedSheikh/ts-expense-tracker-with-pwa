import React, { useContext } from 'react';

import { TransactionContext } from '../context/GlobalState';
import TransactionDel from './Transaction'

// type
import { TransactionType } from '../Types/ExpenseTrackerTypes';

export const TransactionList = () => {

  const { Transaction } = useContext(TransactionContext);       

    return (
        <div>
          <h1> Transaction History </h1>
          <hr />
          <ul id="list" className="list">
            {Transaction.map((trans: TransactionType) => (
              <TransactionDel trans={trans} key={trans.id} />      
            ))}
          </ul>
             
        </div>
    )
}
