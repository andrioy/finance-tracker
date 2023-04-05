import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Flower", amount: 20, isIncome: false },
    { id: 2, text: "Salary", amount: 300, isIncome: true },
    { id: 3, text: "Book", amount: 10, isIncome: false },
    { id: 4, text: "Camera", amount: 150, isIncome: false },
  ]);

  const localStorageTransactions = JSON.parse(
    localStorage.getItem("transactions")
  );

  useEffect(
    () =>
      localStorageTransactions?.[0] &&
      setTransactions(localStorageTransactions),
    []
  );
  const addNewTransaction = (id, text, amount, isIncome) => {
    const nextTransaction = {
      id,
      text,
      amount,
      isIncome,
    };

    setTransactions((transactions) => [...transactions, nextTransaction]);
  };

  const deleteTransaction = (transactionId) => {
    setTransactions((transactions) =>
      transactions.filter((el) => el.id !== transactionId)
    );
  };

  useEffect(
    () =>
      window.localStorage.setItem("transactions", JSON.stringify(transactions)),
    [transactions]
  );

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        addNewTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
