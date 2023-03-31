import { useContext, useEffect } from "react";
import { ListItem, ListItemText, Button } from "@mui/material";
import { AppContext } from "../AppContext/AppContext";

const colors = {
  income: "#00b53c3f",
  expense: "#b50c003f",
};

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(AppContext);
  const sign = transaction?.isIncome ? "+" : "-";

  return (
    <>
      <ListItem
        disablePadding
        sx={{
          backgroundColor: transaction?.isIncome
            ? colors.income
            : colors.expense,
        }}
      >
        <ListItemText
          primary={`${transaction?.text} ${sign}${transaction?.amount} BGN`}
        />
        <Button onClick={() => deleteTransaction(transaction.id)}>X</Button>
      </ListItem>
    </>
  );
};

export default Transaction;
