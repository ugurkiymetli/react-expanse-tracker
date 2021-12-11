import React from "react";
import { useGlobal } from "../../Context/GlobalContext";
function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobal();

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
      {transaction.text}
      <span> {transaction.amount} ₺ </span>
    </li>
  );
}

export default TransactionItem;
