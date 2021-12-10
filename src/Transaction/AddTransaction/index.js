import React, { useState } from "react";
import { useGlobal } from "../../Context/GlobalContext";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobal();

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
