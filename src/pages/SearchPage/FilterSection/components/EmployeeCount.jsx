import React from "react";
import ReactSelect from "react-select";
import styles from "../FilterSection.module.scss";
import { connect } from "react-redux";
import { employeeCountOptions } from "../../../../ConstantData/options";
import { SearchJobsActionHandlers } from "../../../../store/SearchJobs.actionHandlers";

function EmployeeCount({ filters, setFilters }) {
  const { employeeCount = [] } = filters;
  const onChange = (values) => {
    setFilters({ employeeCount: values });
  };
  return (
    <div className={styles.optionContainer}>
      {employeeCount?.length ? <p>No of Employees</p> : <></>}
      <ReactSelect
        isMulti
        name="employeeCount"
        options={employeeCountOptions}
        className="basic-single"
        classNamePrefix="select"
        placeholder="No of Employees"
        onChange={onChange}
        value={employeeCount || []}
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCount);
