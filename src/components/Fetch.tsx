import { useEffect, useState } from "react";
import apiClients, { CanceledError } from "../services/api-clients";

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
    apiClients
      .get<User[]>("/users", {
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

    apiClients.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const onCreate = () => {
    const newUser = { id: 12, name: "Abolfazl Edalati" };
    const originalUsers = [...users];

    setUsers([newUser, ...users]);

    apiClients
      .post("/users", newUser)
      .then(({ data }) => setUsers([data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const onUpdate = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (user.id === u.id ? updatedUser : u)));

    apiClients.patch("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div className="p-4">
      {error && <p className="text-red-700 mb-5">{error}</p>}
      {isLoading && <span className="spinner-border"></span>}
      <button
        className="px-4 py-2 text-sm rounded-xl bg-blue-500 text-white mb-4 font-semibold cursor-pointer"
        onClick={() => onCreate()}
      >
        Add
      </button>
      <ul className="list-none space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between max-w-xl">
            {user.name}
            <div className="space-x-2">
              <button
                className=" border p-2 rounded-xl border-gray-500 text-gray-600 font-semibold cursor-pointer"
                onClick={() => onUpdate(user)}
              >
                Update
              </button>
              <button
                className=" border p-2 rounded-xl border-red-500 text-red-600 font-semibold cursor-pointer"
                onClick={() => onDelete(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
