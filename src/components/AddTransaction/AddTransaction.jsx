import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import { useState, useContext } from "react";

import { AppContext } from "../AppContext/AppContext";

const AddTransaction = () => {
  const { transactions, setTransactions, addNewTransaction } =
    useContext(AppContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(false);

  const onSumbit = () => {
    const nextId = transactions[transactions.length - 1].id + 1;
    addNewTransaction(nextId, text, amount, isIncome);
  };

  return (
    <>
      <Typography variant="h3">Add new transaction</Typography>
      <Box>
        <TextField
          sx={{ marginRight: "10px" }}
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter text..."
        />
        <TextField
          sx={{ marginRight: "10px" }}
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter amount..."
        />
        <FormControlLabel
          control={
            <Switch
              checked={isIncome}
              onChange={() => {
                setIsIncome(!isIncome);
              }}
            />
          }
          label="Is iscome this transaction? "
        />
        <Button
          onClick={onSumbit}
          variant="outlined"
          sx={{ marginTop: "10px" }}
        >
          Add Transaction
        </Button>
      </Box>
    </>
  );
};

export default AddTransaction;
