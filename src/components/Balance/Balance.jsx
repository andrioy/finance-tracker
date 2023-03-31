import { Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const Balance = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const { transactions } = useContext(AppContext);
  useEffect(() => {
    setTotalBalance(
      transactions
        .reduce(
          (accumulator, currentValue) =>
            accumulator +
            (currentValue?.isIncome
              ? +currentValue?.amount
              : -currentValue?.amount),
          0
        )
        .toFixed(2)
    );
  }, [transactions]);

  return (
    <>
      <Typography variant="h3">Your Balance</Typography>
      <Typography variant="h1">${totalBalance}</Typography>
    </>
  );
};

export default Balance;
