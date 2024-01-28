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
      <h1>Users</h1>
      <p>{new Date().toLocaleString()}</p>
      <ul className="space-y-5 ">
        {users.map(
          (user) => (
            <li key={user.id} >
              <a href={`/users/${user.id}`}>
                Name: {user.name}<br></br> Email: {user.email}
              </a>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default UsersPage;
