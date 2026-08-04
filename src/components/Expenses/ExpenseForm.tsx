import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const schema = z.object({
  description: z.string(),
  price: z.string(),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

type Expenses = FormData[];

const ExpenseForm = () => {
  const [expenses, setExpenses] = useState<Expenses>([
    {
      category: "",
      description: "",
      price: "",
    },
  ]);

  const [isEmpty, setEmptyState] = useState(true);

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    isEmpty
      ? setExpenses([
          {
            description: data.description,
            price: data.price,
            category: data.category,
          },
        ])
      : setExpenses([
          ...expenses,
          {
            description: data.description,
            price: data.price,
            category: data.category,
          },
        ]);

    setEmptyState(false);
  };
  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            {...register("description")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="">
            Price
          </label>
          <input
            id="price"
            {...register("price")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            {...register("category")}
            id="category"
            className="form-control"
          >
            <option value="">Select a category</option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
          </select>
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
      <br />
      {!isEmpty && <ExpenseList expenses={expenses} />}
    </div>
  );
};

export default ExpenseForm;
