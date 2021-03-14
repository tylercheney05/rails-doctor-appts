import React from 'react';

const Navbar = () => (
  <nav>
    <ul>
    <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/patients">View Patients</a>
      </li>
      <li>
        <a href="/doctors">View Doctors</a>
      </li>
      <li>
        <a href="/users/sign_out" data-method="delete">Log Out</a>
      </li>
    </ul>
  </nav>
)
export default Navbar;