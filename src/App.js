import "./App.css";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/Income-Expenses";
import AddTransaction from "./Transaction/AddTransaction";
import TransactionList from "./Transaction/List";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
