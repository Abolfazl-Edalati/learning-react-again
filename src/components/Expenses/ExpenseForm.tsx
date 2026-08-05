import categories from "./categories";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z.string().min(3).max(50),
  price: z.number().min(0.01).max(100_000),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <div>
      <form
        className="p-4"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            {...register("description")}
            type="text"
            className="form-control"
          />
          {errors.description && <p>{errors.description?.message}</p>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            {...register("price", { valueAsNumber: true })}
            type="text"
            className="form-control"
          />
          {errors.price && <p>{errors.price?.message}</p>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="form-select"
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.category && <p>{errors.category?.message}</p>}
        </div>
        <button className="btn btn-primary ">Submit</button>
      </form>
      <br />
    </div>
  );
};

export default ExpenseForm;
