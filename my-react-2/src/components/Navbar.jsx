import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <h1>FakeStoreApi</h1>
      <Link to="/" className="text-white mr-4">Products</Link>
      <Link to="/cart" className="text-white">Cart ({cartItems.length})</Link>
    </nav>
  );
};

export default Navbar;