import React from "react";
import { ICompany } from "../../../app/models/company";
import { Segment, Header, Label, Button, Form } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import agent from "../../../app/api/agent";
import { toast } from "react-toastify";

interface IProps {
  selectedCompany: ICompany | undefined;
  setUpdate: (update: boolean) => void;
}

export const CompaniesForm: React.FC<IProps> = ({
  selectedCompany,
  setUpdate,
}) => {
  const required = (value: any) => (value ? undefined : "ERROR");

  const handleFormSubmit = async (company: ICompany) => {
    // company.url = company.url.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    // if (company.id == null) {
    //   await agent.Companies.create(company);
    //   toast.success("Tvrtka kreirana!");
    // } else {
    //   await agent.Companies.update(company);
    //   toast.success("Medij ažuriran!");
    // }
    alert("YIS");
    setUpdate(true);
  };

  return (
    <Segment clearing>
      <FinalForm
        onSubmit={handleFormSubmit}
        initialValues={selectedCompany}
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
            <Button
              disabled={invalid}
              fluid
              positive
              type="submit"
              content="Potvrdi"
            />
          </Form>
        )}
      />
    </Segment>
  );
};
