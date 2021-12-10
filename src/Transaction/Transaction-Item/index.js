import React from "react";
import { useGlobal } from "../../Context/GlobalContext";
function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobal();

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}
      <span> {transaction.amount} ₺ </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}

export default TransactionItem;
