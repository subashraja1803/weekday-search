import React, { useEffect } from "react";
import styles from "./SearchPage.module.scss";
import { fetchData } from "../../api";
import CardsSection from "./CardsSection";
import { SearchJobsActionHandlers } from "../../store/SearchJobs.actionHandlers";
import { connect } from "react-redux";
import FilterSection from "./FilterSection";

function SearchPage({ setCardsData }) {
  useEffect(() => {
    fetchData(9, 0).then((result) => setCardsData(result));
  }, []);
  return (
    <div className={styles.searchPage}>
      <FilterSection />
      <CardsSection />
    </div>
  );
}

const mapStateToProps = ({ searchJobsStore }) => ({});

const mapDispatchToProps = (dispatch) => ({
  setCardsData: (payload) =>
    dispatch(SearchJobsActionHandlers.setCardsData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
