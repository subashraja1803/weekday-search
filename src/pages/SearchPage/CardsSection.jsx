import React from "react";
import styles from "./SearchPage.module.scss";
import { connect } from "react-redux";
import JobCard from "../../molecules/JobCard";
import InlineLoader from "../../molecules/InlineLoader";
import InfiniteScrollContainer from "../../molecules/InfiniteScrollContainer/InfiniteScrollContainer";
import { SearchJobsActionHandlers } from "../../store/SearchJobs.actionHandlers";
import { fetchData } from "../../api";
import { FILES_PER_FETCH } from "../../ConstantData/constants";
import { getFilteredData } from "../../Utils/Utils";

function CardsSection({
  cardsData,
  totalCount,
  offset,
  setOffset,
  appendCardsData,
  filters,
}) {
  if (cardsData === null) {
    return (
      <div styles={{ height: "60vh" }}>
        <InlineLoader />
      </div>
    );
  }

  const visibleCards = getFilteredData(filters, cardsData);

  const onScroll = () => {
    fetchData(FILES_PER_FETCH, offset + FILES_PER_FETCH).then((res) => {
      appendCardsData(res);
      setOffset(offset + FILES_PER_FETCH);
    });
  };
  return (
    <InfiniteScrollContainer
      className={styles.infiniteScrollContainer}
      onScrollNext={onScroll}
      hasMoreRecords={cardsData?.length < totalCount}
    >
      <div className={styles.cardsSection}>
        {visibleCards?.length
          ? visibleCards.map((card) => (
              <JobCard key={card?.jdUid} jobDetail={card} />
            ))
          : "No Jobs Available"}
      </div>
    </InfiniteScrollContainer>
  );
}

const mapStateToProps = ({ searchPageStore }) => ({
  cardsData: searchPageStore.cardsData,
  totalCount: searchPageStore.totalCount,
  offset: searchPageStore.offset,
  filters: searchPageStore.filters,
});

const mapDispatchToProps = (dispatch) => ({
  appendCardsData: (payload) =>
    dispatch(SearchJobsActionHandlers.appendCardsData(payload)),
  setOffset: (payload) => dispatch(SearchJobsActionHandlers.setOffset(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsSection);
