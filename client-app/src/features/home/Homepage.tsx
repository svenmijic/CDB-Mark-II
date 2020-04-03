import React from "react";
import { Header, Grid, Segment } from "semantic-ui-react";

const Homepage: React.FC = () => {
  return (
    <Grid verticalAlign="middle" columns={1} className="home-page">
      <Grid.Column>
        <Header inverted size="huge" textAlign="center">
          BEST Zagreb CDB
        </Header>
        <Segment size="large">
          <p>Future login box</p>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Homepage;
