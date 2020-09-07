import React from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { TransactionProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <TransactionProvider>
      <Header />    
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
