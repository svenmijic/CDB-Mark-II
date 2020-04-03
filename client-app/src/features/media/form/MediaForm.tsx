import React from "react";
import { Segment, Button, Form, Header, Label } from "semantic-ui-react";
import { IMedium } from "../../../app/models/medium";
import { Form as FinalForm, Field } from "react-final-form";
import agent from "../../../app/api/agent";
import { toast } from "react-toastify";

interface IProps {
  selectedMedium: IMedium | undefined;
  setUpdate: (update: boolean) => void;
}

const MediaForm: React.FC<IProps> = ({ selectedMedium, setUpdate }) => {
  const required = (value: any) => (value ? undefined : "ERROR");

  const handleFormSubmit = (medium: IMedium) => {
    if (medium.id == null) {
      agent.Media.create(medium);
      toast.success("Medij kreiran!");
    } else {
      agent.Media.update(medium);
      toast.success("Medij ažuriran!");
    }
    setUpdate(true);
  };

  return (
    <Segment clearing>
      <FinalForm
        onSubmit={handleFormSubmit}
        initialValues={selectedMedium}
        render={({ handleSubmit, invalid }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div>
                  <Header size="small">Ime medija</Header>
                  <input {...input} />
                  {meta.touched && meta.error && (
                    <Label basic color="red" pointing>
                      Ime ne može biti prazno!
                    </Label>
                  )}
                </div>
              )}
            </Field>
            <Field name="url" validate={required}>
              {({ input, meta }) => (
                <div>
                  <Header size="small">URL</Header>
                  <input {...input} />
                  {meta.touched && meta.error && (
                    <Label basic color="red" pointing>
                      URL ne može biti prazan!
                    </Label>
                  )}
                </div>
              )}
            </Field>
            <Field name="emails" validate={required}>
              {({ input, meta }) => (
                <div>
                  <Header size="small">Mailovi</Header>
                  <input {...input} />
                  {meta.touched && meta.error && (
                    <Label basic color="red" pointing>
                      Mailovi ne mogu biti prazni!
                    </Label>
                  )}
                </div>
              )}
            </Field>
            <Button disabled={invalid} fluid positive type="submit">
              Potvrdi
            </Button>
          </Form>
        )}
      />
    </Segment>
  );
};

export default MediaForm;
