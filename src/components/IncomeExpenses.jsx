import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  const amount = transactions.map(transaction => transaction.amount)

  const income = amount.filter(item => item > 0).reduce((acc, curr) => acc + curr, 0).toFixed(2);

  const expense = -1*amount.filter(item => item < 0).reduce((acc, curr) => acc + curr, 0).toFixed(2);

  const expensToPositive = expense.toFixed(2);

  return (
    <div>
         <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">{expensToPositive}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenses