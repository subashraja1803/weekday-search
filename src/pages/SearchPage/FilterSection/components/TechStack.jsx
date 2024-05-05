import React from "react";
import ReactSelect from "react-select";
import styles from "../FilterSection.module.scss";
import { connect } from "react-redux";
import { SearchJobsActionHandlers } from "../../../../store/SearchJobs.actionHandlers";
import { techStackOptions } from "../../../../ConstantData/options";

function TechStack({ filters, setFilters }) {
  const { techStack = [] } = filters;
  const onChange = (value) => {
    setFilters({ techStack: value });
  };
  return (
    <div className={styles.optionContainer}>
      {Object.keys(techStack)?.length ? <p>Tech Stack</p> : <></>}
      <ReactSelect
        isMulti
        name="techStack"
        options={techStackOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Tech Stack"
        onChange={onChange}
        value={techStack || []}
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

export default connect(mapStateToProps, mapDispatchToProps)(TechStack);
