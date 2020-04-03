import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";
import Navbar from "../../features/nav/Navbar";
import MediaDashboard from "../../features/media/dashboard/MediaDashboard";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import Homepage from "../../features/home/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        autoClose={3000}
        pauseOnFocusLoss={false}
      />
      <Route exact path="/" component={Homepage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Navbar />
            <Container style={{ paddingTop: "100px" }}>
              <Route exact path="/mediji" component={MediaDashboard} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(App);
