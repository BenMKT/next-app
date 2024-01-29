import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  //add the rest of the properties as per the API
}

const UsersPage = async () => {
  // use caching(cache: no-store) or revalidation (as below) to fetch data from API after every 10 seconds for data that changes frequently
  // Don't use axios as it doesn't support caching like below

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  const users: User[] = await res.json();

  return (
    <>
      <h1 className="text-center mt-6 text-2xl font-extrabold ">Users</h1>
      <table className="table outline outline-gray-200 my-3 max-w-6xl mx-auto">
        <thead>
          <tr className="text-lg text-gray-500">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-neutral-200  ">
              <td>
                {user.id}
              </td>
              <td>
                <a href={`/users/${user.id}`}>
                  {user.name}
                </a>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
