import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item as={Link} to="/" header>
        <img id="logo" src="logo128white.png" alt="logo" />
        CDB
      </Menu.Item>
      <Menu.Item as={Link} to="/projekti" name="Projekti" />
      <Menu.Item as={Link} to="/tvrtke" name="Tvrtke" />
      <Menu.Item as={Link} to="/mediji" name="Mediji" />
      <Menu.Item position="right" as={Link} to="/logout" name="Profil" />
    </Menu>
  );
};

export default Navbar;
