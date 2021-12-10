import React from "react";
import { useGlobal } from "../../Context/GlobalContext";
import TransactionItem from "../Transaction-Item";
function TransactionList() {
  const { transactions } = useGlobal();
  // console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
