import React from 'react';
import PropTypes from 'prop-types';

import s from './TransactionHistory.module.scss';

const TransactionTr = ({ id, type, amount, currency }, i) => {
  const trString = i % 2 === 1 ? s.grey : s.white;
  return (
    <tr key={id} className={trString}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

const TransactionBody = ({ items }) => {
  if (items.length === 0) return null;
  return <tbody className={s.tbody}>{items.map(TransactionTr)}</tbody>;
};

const Transactions = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionBody items={transactions} />
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
