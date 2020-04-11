import React from "react";
import { Header, Grid } from "semantic-ui-react";
import Login from "../login/Login";

const Homepage: React.FC = () => {
  return (
    <Grid columns={1} className="home-page">
      <Grid.Column style={{ marginTop: "20px" }}>
        <Header inverted>BEST Zagreb CDB</Header>
        <Login />
      </Grid.Column>
    </Grid>
  );
};

export default Homepage;
