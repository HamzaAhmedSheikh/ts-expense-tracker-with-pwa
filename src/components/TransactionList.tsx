import React, { useContext } from 'react';

import { TransactionContext } from '../context/GlobalState';
import TransactionDel from './Transaction'

// type
import { TransactionType } from '../Types/Types';

export const TransactionList = () => {

  const { Transaction } = useContext(TransactionContext);       

    return (
        <div>
          <h1> Transaction History </h1>
          <hr />

          {Transaction.map((trans: TransactionType) => (
             <TransactionDel trans={trans} key={trans.id} />                   
              
          ))}

             
        </div>
    )
}
