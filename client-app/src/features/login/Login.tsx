import React from "react";
import { Segment, Form, Button, Input, Icon, Header } from "semantic-ui-react";
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
      <Header>BEST Zagreb CDB</Header>
      <FinalForm
        onSubmit={handleFormSubmit}
        initialValues={loginCreds}
        render={({ handleSubmit, pristine }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="username">
              {({ input }) => (
                <Input fluid iconPosition="left" placeholder="Email">
                  <Icon name="at" />
                  <input {...input} />
                </Input>
              )}
            </Field>
            <Field name="password">
              {({ input }) => (
                <Input fluid iconPosition="left" placeholder="Lozinka">
                  <Icon name="lock" />
                  <input {...input} />
                </Input>
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
