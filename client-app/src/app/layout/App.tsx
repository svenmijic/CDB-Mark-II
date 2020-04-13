import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";
import Navbar from "../../features/nav/Navbar";
import MediaDashboard from "../../features/media/dashboard/MediaDashboard";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import Homepage from "../../features/home/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompaniesDashboard from "../../features/companies/dashboard/CompaniesDashboard";
import CompanyDetails from "../../features/companies/details/CompanyDetails";

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
            <Container fluid style={{ paddingTop: "100px" }}>
              <Switch>
                <Route exact path="/tvrtke" component={CompaniesDashboard} />
                <Route path="/tvrtke/:id" component={CompanyDetails} />
                <Route exact path="/mediji" component={MediaDashboard} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(App);
