import React from "react";
import styles from "./FilterSection.module.scss";
import Role from "./components/Role";
// import EmployeeCount from "./components/EmployeeCount";
import Experience from "./components/Experience";
import WorkSetting from "./components/WorkSetting";
// import TechStack from "./components/TechStack";
import BaseSalary from "./components/BaseSalary";
import CompanyName from "./components/CompanyName";

// Employee Count, TechStack filters are commented because there are no such value in api results.

function FilterSection() {
  return (
    <div className={styles.filterSection}>
      <Role />
      {/* <EmployeeCount /> */}
      <Experience />
      <WorkSetting />
      {/* <TechStack /> */}
      <BaseSalary />
      <CompanyName />
    </div>
  );
}

export default FilterSection;
