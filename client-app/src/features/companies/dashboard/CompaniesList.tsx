import React, { useState } from "react";
import {
  Segment,
  Input,
  List,
  Button,
  Icon,
  Header,
  Dimmer,
  Loader,
  Modal,
} from "semantic-ui-react";
import { ICompany } from "../../../app/models/company";
import { Link } from "react-router-dom";
import { CompaniesForm } from "../form/CompaniesForm";

interface IProps {
  companies: ICompany[];
  setUpdate: (update: boolean) => void;
}

const CompaniesList: React.FC<IProps> = ({ companies, setUpdate }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Segment>
      <Button positive fluid onClick={() => setShowModal(true)}>
        <Icon name="plus" />
        Dodaj novu tvrtku
      </Button>{" "}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <CompaniesForm selectedCompany={undefined} setUpdate={setUpdate} />
      </Modal>
      <Input
        className="search-field"
        fluid
        icon="search"
        placeholder="Pretraži tvrtke"
      />
      <List celled relaxed>
        {companies.length === 0 ? (
          <Dimmer active inverted>
            <Loader inverted size="big" />
          </Dimmer>
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
