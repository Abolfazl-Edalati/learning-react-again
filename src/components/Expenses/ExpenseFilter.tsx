import categories from "./categories";

interface Props {
  onSelectedCategory: (selectedCategory: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <div className="px-4">
      <select
        className="form-select"
        onChange={(e) => onSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
