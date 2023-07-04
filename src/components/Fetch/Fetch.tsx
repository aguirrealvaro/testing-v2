import { FunctionComponent, useEffect, useState } from "react";

type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const Fetch: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      {users.length === 0 ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {users.map((user) => {
            const { id, title } = user;

            return <li key={id}>{title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
