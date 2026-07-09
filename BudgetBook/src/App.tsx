import { useState } from "react";
import "./App.css";

type Expense = {
  id: number;
  name: string;
  price: number;
};

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  return (
    <>
      <h1>BudgetBook</h1>
      <input
        type="text"
        placeholder="項目名"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="金額"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </>
  );
}

export default App;
