import { FunctionComponent, useState } from "react";

export type UserType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const Fetch: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserType[]>([]);

  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setIsLoading(false);
    setUsers(data);
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <button onClick={fetchUsers}>Load users</button>
      {isLoading && <span data-testid="loading-status">Loading...</span>}
      {Boolean(users.length) && (
        <>
          <h2>Users:</h2>
          <ul>
            {users.map((user) => {
              const { id, title } = user;

              return <li key={id}>{title}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
