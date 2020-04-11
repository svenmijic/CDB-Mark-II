import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import { useHistory } from "react-router-dom";

interface LoginCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const loginCreds: LoginCredentials = {
    username: "",
    password: "",
  };

  const handleFormSubmit = (creds: LoginCredentials) => {
    history.push("/mediji");
  };

  return (
    <Segment clearing padded="very">
      <FinalForm
        onSubmit={handleFormSubmit}
        initialValues={loginCreds}
        render={({ handleSubmit, pristine }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="username">
              {({ input }) => (
                <div>
                  <input {...input} placeholder="Email" />
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input }) => (
                <div>
                  <input {...input} placeholder="Lozinka" />
                </div>
              )}
            </Field>
            <Button disabled={false} fluid positive type="submit">
              Prijavi se
            </Button>
          </Form>
        )}
      />
    </Segment>
  );
};

export default Login;
