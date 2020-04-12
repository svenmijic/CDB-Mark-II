import React from "react";
import { Segment, Input, List, Button, Icon } from "semantic-ui-react";
import { ICompany } from "../../../app/models/company";

interface IProps {
  companies: ICompany[];
}

const CompaniesList: React.FC<IProps> = ({ companies }) => {
  return (
    <Segment>
      <Button positive fluid>
        <Icon name="plus" />
        Dodaj novu tvrtku
      </Button>{" "}
      <Input fluid icon="search" placeholder="Pretraži tvrtke" />
      <List divided relaxed>
        {companies.map((company) => (
          <List.Item key={company.id}>{company.name}</List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default CompaniesList;
