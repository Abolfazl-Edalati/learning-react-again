interface Expenses {
  id: number;
  category: string;
  price: number;
  description: string;
}

interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <div className="p-4">
      <table className="table mt-3 table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>${expense.price}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => +expense.price + acc, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
