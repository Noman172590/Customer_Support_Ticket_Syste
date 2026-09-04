import React from "react";

const NavBar = () => {
  const menuBar = [
  { name: "Dashboard", path: "/" },
  { name: "Tickets", path: "/tickets" },
  { name: "Customers", path: "/customers" },
  { name: "Agents", path: "/agents" },
  { name: "Reports", path: "/reports" },
  { name: "Settings", path: "/settings" },
];
  return (
    <div className="max-w-7xl mx-auto border p-4 flex justify-between items-center">
      <p className="text-xl font-bold">CS-Ticket-System</p>
      <ul className="flex gap-4">
        {menuBar.map((item) => (
          <li className="cursor-pointer" key={item.name}>{item.name}</li>
        ))}
      </ul>
      <button className="cursor-pointer bg-amber-400 p-2 rounded">
        New Ticket
      </button>
    </div>
  );
};

export default NavBar;
