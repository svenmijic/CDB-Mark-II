import React from "react";
import {
  Segment,
  Input,
  List,
  Button,
  Icon,
  Header,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { ICompany } from "../../../app/models/company";
import { Link } from "react-router-dom";

interface IProps {
  companies: ICompany[];
  setCompanies: (companies: ICompany[]) => void;
}

const CompaniesList: React.FC<IProps> = ({ companies, setCompanies }) => {
  return (
    <Segment>
      <Button positive fluid>
        <Icon name="plus" />
        Dodaj novu tvrtku
      </Button>{" "}
      <Input
        className="search-field"
        fluid
        icon="search"
        placeholder="Pretraži tvrtke"
      />
      <List celled relaxed>
        {companies.length == 0 ? (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted size="big" />
            </Dimmer>
          </Segment>
        ) : (
          companies.map((company) => (
            <List.Item key={company.id}>
              <Header
                size="small"
                as={Link}
                to={`/tvrtke/${company.id}`}
                content={company.name}
              />
            </List.Item>
          ))
        )}
      </List>
    </Segment>
  );
};

export default CompaniesList;
