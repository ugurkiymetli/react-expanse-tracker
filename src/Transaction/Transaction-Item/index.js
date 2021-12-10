import React from "react";

function TransactionItem({ transaction }) {
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}
      <span> {transaction.amount} ₺ </span>
      <button className="delete-btn">x</button>
    </li>
  );
}

export default TransactionItem;
