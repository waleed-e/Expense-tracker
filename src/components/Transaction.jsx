import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext); // Assuming you have a delete function in your context
  const { id, text, amount } = transaction;



  const sign = amount < 0 ? '-' : '+';

  // const handleDelete = () => {
  //   deleteTransaction(id); // Call the delete function with the transaction ID
  // };

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text} <span>{sign}{Math.abs(amount)}</span>
      <button className="delete-btn" onClick={()=> deleteTransaction(id)}>x</button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Transaction;