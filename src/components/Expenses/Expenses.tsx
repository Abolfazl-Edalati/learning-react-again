import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", price: 20, category: "Utilities" },
    { id: 2, description: "vvv", price: 20, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const onDelete = (id: number) => {
    setExpenses(
      expenses.filter((expense, index) => (id === index ? null : expense)),
    );
  };
  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter onSelectedCategory={(sc) => setSelectedCategory(sc)} />
      <ExpenseList expenses={visibleCategory} onDelete={onDelete} />
    </div>
  );
};

export default Expenses;
