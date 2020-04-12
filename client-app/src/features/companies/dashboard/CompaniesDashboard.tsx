import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import CompaniesList from "./CompaniesList";
import CompaniesFilters from "./CompaniesFilters";
import { ICompany } from "../../../app/models/company";
import agent from "../../../app/api/agent";

const CompaniesDashboard = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    agent.Companies.list().then((c) => {
      setCompanies(
        c.sort((a, b) =>
          a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? 1
            : b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()
            ? -1
            : 0
        )
      );
    });
  });

  return (
    <Grid>
      <Grid.Column width={12}>
        <CompaniesList companies={companies} />
      </Grid.Column>
      <Grid.Column width={4}>
        <CompaniesFilters />
      </Grid.Column>
    </Grid>
  );
};

export default CompaniesDashboard;
