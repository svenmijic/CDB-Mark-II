import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import CompaniesList from "./CompaniesList";
import CompaniesFilters from "./CompaniesFilters";
import { ICompany } from "../../../app/models/company";
import agent from "../../../app/api/agent";

const CompaniesDashboard = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [update, setUpdate] = useState(false);

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
    setUpdate(false);
    console.log("RELOAD");
  }, [setCompanies, update]);

  return (
    <Grid>
      <Grid.Column width={10}>
        <CompaniesList companies={companies} setUpdate={setUpdate} />
      </Grid.Column>
      <Grid.Column width={6}>
        <CompaniesFilters />
      </Grid.Column>
    </Grid>
  );
};

export default CompaniesDashboard;
