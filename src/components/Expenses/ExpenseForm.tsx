const ExpenseForm = () => {
  return (
    <div>
      <form className="p-4 space-y-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="desc" className="">
            Description
          </label>
          <input
            id="desc"
            type="text"
            className="border rounded-xl max-w-60 px-3 py-1 border-zinc-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="">
            Price
          </label>
          <input
            id="price"
            type="text"
            className="border rounded-xl max-w-60 px-3 py-1 border-zinc-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="border rounded-xl max-w-60 px-2 py-1 border-zinc-500"
          >
            <option value="all" selected>
              All Categories
            </option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
          </select>
        </div>
      </form>

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
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseForm;
