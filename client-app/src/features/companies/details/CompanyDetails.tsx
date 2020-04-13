import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { ICompany } from "../../../app/models/company";
import agent from "../../../app/api/agent";
import { RouteComponentProps } from "react-router-dom";

interface DetailParams {
  id: string;
}

const CompanyDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
}) => {
  const [company, setCompany] = useState<ICompany | undefined>(undefined);

  useEffect(() => {
    agent.Companies.details(match.params.id).then((c) => setCompany(c));
  }, [match.params.id]);

  return (
    <div>
      <Header content={company?.name} />
    </div>
  );
};

export default CompanyDetails;
