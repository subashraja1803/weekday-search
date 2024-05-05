import React from "react";
import ReactSelect from "react-select";
import styles from "../FilterSection.module.scss";
import { connect } from "react-redux";
import { workSettingOptions } from "../../../../ConstantData/options";
import { SearchJobsActionHandlers } from "../../../../store/SearchJobs.actionHandlers";

function WorkSetting({ filters, setFilters }) {
  const { workSetting = [] } = filters;
  const onChange = (value) => {
    setFilters({ workSetting: value });
  };
  return (
    <div className={styles.optionContainer}>
      {Object.keys(workSetting)?.length ? <p>Remote</p> : <></>}
      <ReactSelect
        isMulti
        name="remote"
        options={workSettingOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Remote"
        onChange={onChange}
        value={workSetting || []}
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkSetting);
