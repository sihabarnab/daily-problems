// src/components/UsersTable.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../utils/usersApi";

export default function UsersTable() {
  const { data, isLoading, error } = useQuery(["users"], fetchUsers);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table className="w-full border-collapse border border-gray-300 mt-5">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{user.id}</td>
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
