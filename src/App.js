import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 394.12,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 654.0,
      date: new Date(2020, 4, 16),
    },
    {
      id: "e4",
      title: "NEW PC",
      amount: 1500.99,
      date: new Date(2022, 5, 20),
    },
  ];

  return (
    <div>
      <h2>Let's started</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
