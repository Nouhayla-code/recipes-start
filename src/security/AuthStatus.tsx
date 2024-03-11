import { useAuth } from "./AuthProvider";
import { NavLink, Link } from "react-router-dom";
import React from "react";

export default function AuthStatus() {
  const auth = useAuth();

  if (!auth.isLoggedIn()) {
    return (
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    );
  } else {
    return (
      <li>
        <Link to="/logout">Logout (Logged in as {auth.username}) </Link>
      </li>
    );
  }
}
