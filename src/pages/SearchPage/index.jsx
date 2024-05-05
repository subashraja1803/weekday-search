import React, { useEffect } from "react";
import styles from "./SearchPage.module.scss";
import { fetchData } from "../../api";
import CardsSection from "./CardsSection";
import { SearchJobsActionHandlers } from "../../store/SearchJobs.actionHandlers";
import { connect } from "react-redux";
import FilterSection from "./FilterSection";

function SearchPage({ setCardsData, offset }) {
  useEffect(() => {
    document.title = "Search Jobs";
    fetchData(12, offset).then((result) => setCardsData(result));
  }, []);
  return (
    <div className={styles.searchPage}>
      <FilterSection />
      <CardsSection />
    </div>
  );
}

const mapStateToProps = ({ searchPageStore }) => ({
  offset: searchPageStore.offset,
});

const mapDispatchToProps = (dispatch) => ({
  setCardsData: (payload) =>
    dispatch(SearchJobsActionHandlers.setCardsData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
