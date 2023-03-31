import { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { AppContext } from "../AppContext/AppContext";
import { textAlign } from "@mui/system";

const IncomeExprenses = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((item) => item?.isIncome)
    .reduce(
      (accumulator, currentValue) => accumulator + +currentValue?.amount,
      0
    );

  const expense = transactions
    .filter((item) => !item?.isIncome)
    .reduce(
      (accumulator, currentValue) => accumulator + +currentValue?.amount,
      0
    );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          margin: "20px",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h3">Income</Typography>
          <Typography color={"green"} variant="h3">
            ${income.toFixed(2)} BGN
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "20px" }}>
          <Typography variant="h3">Expenses</Typography>
          <Typography variant="h3" color={"red"}>
            ${expense.toFixed(2)} BGN
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default IncomeExprenses;
