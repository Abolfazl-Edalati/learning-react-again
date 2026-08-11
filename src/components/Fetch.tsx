import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  id: number;
}

const Fetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <p className="text-danger">{error}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
