import "./App.css";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Balance from "./components/Balance/Balance";
import Header from "./components/Header/Header";
import IncomeExprenses from "./components/IncomeExprenses/IncomeExpreses";
import TransactionList from "./components/TransactionList/TransactionList";

function App() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExprenses />
      <TransactionList />
      <AddTransaction />
    </>
  );
}

export default App;
