import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Groceries 🛍", amount: -114 },
    { id: 2, text: "Salary 🤑", amount: 2500 },
    { id: 3, text: "Books 📚", amount: -63 },
    { id: 4, text: "Mouse 🖱", amount: -149 },
    { id: 5, text: "Bitcoin ₿", amount: 157 },
    { id: 6, text: "Car Service 🛠", amount: -450 },
  ],
};

//create context
const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const amounts = state.transactions.map((transaction) => transaction.amount);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        amounts,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
