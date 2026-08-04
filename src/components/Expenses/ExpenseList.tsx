interface Props {
  expenses: { category: string; price: string; description: string }[];
  onClick?: () => void;
}

const ExpenseList = ({ expenses, onClick }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th>Price</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>{expense.price}$</td>
            <td>{expense.category}</td>
            <td>
              <button className="btn btn-danger" onClick={onClick}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
