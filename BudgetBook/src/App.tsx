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

  const addExpense = () => {
    if(name === "" && price === ""){
      return alert("項目名と金額を記入してください");
    }else if(price === ""){
      return alert("金額を記入してください");
    }else if(name === ""){
      return alert("項目名を記入してください");
    }
    const newExpense = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    setExpenses([...expenses, newExpense]);
    setName("");
    setPrice("");
  };
  
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.price
  }, 0)

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
      <button onClick={addExpense}>追加</button>
      <ul>
        {expenses.map((expense) => {
          return <li key={expense.id}>{expense.name} : {expense.price}</li>
        })}
      </ul>
      <h2>合計金額: {total}円</h2>
    </>
  );
}

export default App;
