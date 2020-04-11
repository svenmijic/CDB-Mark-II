import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
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
      <Dropdown as={Menu.Item} position="right" text="Sven Mijić">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/profil" text="Profil" />
          <Dropdown.Item as={Link} to="/logout" text="Odjavi se" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default Navbar;
