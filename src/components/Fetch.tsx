import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  id: number;
}

const Fetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();

    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users",
    //     );
    //     setUsers(res.data);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //   }
    // };
    // fetchData();
  }, []);

  const onDelete = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div>
      {error && <p className="text-red-700 mb-5">{error}</p>}
      {isLoading && <span className="spinner-border"></span>}
      <ul className="list-none space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between max-w-2xs">
            {user.name}
            <button
              className=" border p-2 rounded-xl border-red-500 text-red-600 font-semibold cursor-pointer"
              onClick={() => onDelete(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
