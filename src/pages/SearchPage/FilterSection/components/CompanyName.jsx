import React from "react";
import styles from "../FilterSection.module.scss";
import { connect } from "react-redux";
import { SearchJobsActionHandlers } from "../../../../store/SearchJobs.actionHandlers";
import { TextField } from "@mui/material";

function CompanyName({ filters, setFilters }) {
  const { companyName = "" } = filters;
  const onChange = ({ target: { value } }) => {
    setFilters({ companyName: value });
  };
  return (
    <div className={styles.optionContainer}>
      {companyName?.length ? <p>Company Name</p> : <></>}
      <TextField
        className={styles.textField}
        value={companyName}
        placeholder="Company Name"
        onChange={onChange}
      />
    </div>
  );
}

const mapStateToProps = ({ searchPageStore }) => ({
  filters: searchPageStore.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setFilters: (payload) =>
    dispatch(SearchJobsActionHandlers.setFilters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyName);
