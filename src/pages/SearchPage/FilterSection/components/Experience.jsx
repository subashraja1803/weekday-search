import React from "react";
import ReactSelect from "react-select";
import styles from "../FilterSection.module.scss";
import { connect } from "react-redux";
import { experienceOptions } from "../../../../ConstantData/options";
import { SearchJobsActionHandlers } from "../../../../store/SearchJobs.actionHandlers";

function Experience({ filters, setFilters }) {
  const { experience = "" } = filters;
  const onChange = (value) => {
    setFilters({ experience: value });
  };
  return (
    <div className={styles.optionContainer}>
      {experience?.length ? <p>Experience</p> : <></>}
      <ReactSelect
        name="experience"
        isClearable
        options={experienceOptions}
        className="basic-single"
        classNamePrefix="select"
        placeholder="Experience"
        onChange={onChange}
        value={experience || ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
