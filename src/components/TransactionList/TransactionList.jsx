import { List, ListItem, ListItemText, Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import Transaction from "../Transaction/Transaction";

const TransactionList = () => {
  const { transactions } = useContext(AppContext);
  return (
    <List>
      {transactions.map((transaction) => (
        <Transaction key={transaction?.id} transaction={transaction} />
      ))}
    </List>
  );
};

export default TransactionList;
