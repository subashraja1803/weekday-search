import React, { useEffect } from "react";
import styles from "./SearchPage.module.scss";
import { fetchData } from "../../api";
import CardsSection from "./CardsSection";

function SearchPage() {
  useEffect(() => {
    fetchData({
      limit: 10,
      offset: 5,
    }).then((result) => console.log(result));
  }, []);
  return (
    <div className={styles.searchPage}>
      <CardsSection />
    </div>
  );
}

export default SearchPage;
