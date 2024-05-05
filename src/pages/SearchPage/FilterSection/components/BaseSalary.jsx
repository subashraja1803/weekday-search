import React from "react";
import ReactSelect from "react-select";
import styles from "../FilterSection.module.scss";
import { connect } from "react-redux";
import { SearchJobsActionHandlers } from "../../../../store/SearchJobs.actionHandlers";
import { baseSalaryOptions } from "../../../../ConstantData/options";

function BaseSalary({ filters, setFilters }) {
  const { baseSalary = "" } = filters;
  const onChange = (value) => {
    setFilters({ baseSalary: value });
  };
  return (
    <div className={styles.optionContainer}>
      {baseSalary?.length ? <p>Base Salary</p> : <></>}
      <ReactSelect
        name="baseSalary"
        options={baseSalaryOptions}
        className="basic-single"
        classNamePrefix="select"
        placeholder="Minimum Base Pay Salary"
        onChange={onChange}
        value={baseSalary || ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseSalary);
