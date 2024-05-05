import React from "react";
import ReactSelect from "react-select";
import styles from "../FilterSection.module.scss";
import { SearchJobsActionHandlers } from "../../../../store/SearchJobs.actionHandlers";
import { connect } from "react-redux";
import { roleOptions } from "../../../../ConstantData/options";

function Role({ filters, setFilters }) {
  const onChange = (values) => {
    setFilters({ roles: values });
  };
  const { roles = [] } = filters;
  return (
    <div className={styles.optionContainer}>
      {roles.length ? <p>Roles</p> : <></>}
      <ReactSelect
        isMulti
        name="role"
        options={roleOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Roles"
        onChange={onChange}
        value={roles || []}
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

export default connect(mapStateToProps, mapDispatchToProps)(Role);
