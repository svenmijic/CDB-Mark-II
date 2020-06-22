import React from "react";
import { ICompany } from "../../../app/models/company";
import {
  Segment,
  Header,
  Label,
  Button,
  Form,
  Radio,
  Grid,
} from "semantic-ui-react";
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
    company.url = company.url.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    if (company.id == null) {
      await agent.Companies.create(company);
      toast.success("Tvrtka kreirana!");
    } else {
      await agent.Companies.update(company);
      toast.success("Medij ažuriran!");
    }
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
            <Grid stackable padded="vertically" columns={2}>
              <Grid.Column>
                <Field name="name" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Header size="small">Ime tvrtke</Header>
                      <input {...input} />
                      {meta.touched && meta.error && (
                        <Label basic color="red" pointing>
                          Ime ne može biti prazno!
                        </Label>
                      )}
                    </div>
                  )}
                </Field>
              </Grid.Column>
              <Grid.Column>
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
              </Grid.Column>
              <Grid.Column>
                <Field name="address" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Header size="small">Adresa</Header>
                      <input {...input} />
                      {meta.touched && meta.error && (
                        <Label basic color="red" pointing>
                          Adresa ne smije biti prazna!
                        </Label>
                      )}
                    </div>
                  )}
                </Field>
              </Grid.Column>
              <Grid.Column>
                <Field name="city" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Header size="small">Grad</Header>
                      <input {...input} />
                      {meta.touched && meta.error && (
                        <Label basic color="red" pointing>
                          Grad ne smije biti prazan!
                        </Label>
                      )}
                    </div>
                  )}
                </Field>
              </Grid.Column>
              <Grid.Column>
                <Field name="phone" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Header size="small">Telefon</Header>
                      <input {...input} />
                      {meta.touched && meta.error && (
                        <Label basic color="red" pointing>
                          Telefon ne smije biti prazan!
                        </Label>
                      )}
                    </div>
                  )}
                </Field>
              </Grid.Column>
              <Grid.Column>
                <Field name="category" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Header size="small">Kategorija</Header>
                      <input {...input} />
                      {meta.touched && meta.error && (
                        <Label basic color="red" pointing>
                          Kategorija ne smije biti prazna!
                        </Label>
                      )}
                    </div>
                  )}
                </Field>
              </Grid.Column>
              <Grid.Column>
                <Field type="radio" name="isAnnualSponsor" validate={required}>
                  {({ input }) => (
                    <div>
                      <Header size="small">Godišnji sponzor</Header>
                      <input {...input} />
                    </div>
                  )}
                </Field>
              </Grid.Column>
            </Grid>
            <Field name="comment" validate={required}>
              {({ input }) => (
                <div>
                  <Header size="small">Komentar</Header>
                  <textarea {...input} />
                </div>
              )}
            </Field>
            <Button
              disabled={invalid}
              fluid
              primary
              type="submit"
              content="Potvrdi"
            />
          </Form>
        )}
      />
    </Segment>
  );
};

// public string Name { get; set; }
//         public string Url { get; set; }
//         public string Address { get; set; }
//         public string City { get; set; }
//         public string Phone { get; set; }
//         public string Comment { get; set; }
//         public string Category { get; set; }
//         public bool IsAnnualSponsor { get; set; }
