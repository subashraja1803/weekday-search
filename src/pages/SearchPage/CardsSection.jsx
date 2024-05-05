import React from "react";
import styles from "./SearchPage.module.scss";
import { connect } from "react-redux";
import JobCard from "../../molecules/JobCard";
import InlineLoader from "../../molecules/InlineLoader";

function CardsSection({ cardsData }) {
  if (cardsData === null) {
    return (
      <div styles={{ height: "60vh" }}>
        <InlineLoader />
      </div>
    );
  }
  return (
    <div className={styles.cardsSection}>
      {cardsData?.length
        ? cardsData.map((card) => (
            <JobCard key={card?.jdUid} jobDetail={card} />
          ))
        : "No Jobs Available"}
    </div>
  );
}

const mapStateToProps = ({ searchPageStore }) => ({
  cardsData: searchPageStore.cardsData,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardsSection);
