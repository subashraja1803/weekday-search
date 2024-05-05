import React, { useState } from "react";
import styles from "./JobCard.module.scss";
import { Avatar, Box, Button } from "@mui/material";
import { capitalizeFirstLetter } from "../../Utils/Utils";
import { CURRENCY_UNICODE_MAP } from "../../ConstantData/staticData";

function JobCard({ jobDetail }) {
  const {
    companyName = "",
    logoUrl,
    jobRole = "",
    location = "",
    salaryCurrencyCode = "",
    minJdSalary = "",
    maxJdSalary = "",
    jobDetailsFromCompany = "",
    minExp = 0,
  } = jobDetail;
  const [descExpanded, setDescExpanded] = useState(false);
  return (
    <Box className={styles.jobCard}>
      <div className={styles.topSection}>
        <div className={styles.jobPostedTime}>
          <span>⏳ Posted 3 days ago</span>
        </div>
      </div>
      <div className={styles.nameSection}>
        <img className={styles.logo} src={logoUrl} alt="logo" />
        <div className={styles.infoContainer}>
          <h3>{companyName}</h3>
          <h2>{capitalizeFirstLetter(jobRole)}</h2>
          <p className={styles.subtext}>{capitalizeFirstLetter(location)}</p>
        </div>
      </div>
      <p className={styles.salaryContainer}>
        {`Estimated Salary: ${CURRENCY_UNICODE_MAP[salaryCurrencyCode]}`}
        {maxJdSalary && minJdSalary
          ? `${minJdSalary} - ${maxJdSalary} LPA`
          : `${maxJdSalary || minJdSalary} LPA`}
      </p>
      <div className={styles.companyDescription}>
        <p className={styles.aboutCompany}>About Company:</p>
        <p style={{ fontSize: "1.4rem" }}>
          <strong>About us</strong>
        </p>
        <div
          className={
            descExpanded
              ? styles.descriptionExpanded
              : styles.descriptionCompact
          }
        >
          {jobDetailsFromCompany}
        </div>
      </div>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "0.5rem",
          position: "relative",
          top: descExpanded ? "0rem" : "-1.3rem",
        }}
      >
        <span
          className={styles.viewJob}
          onClick={() => {
            setDescExpanded(!descExpanded);
          }}
        >
          {descExpanded ? "Collapse" : "View Job"}
        </span>
      </Box>
      <div className={styles.infoContainer}>
        <h3>Minimum Experience</h3>
        <h2>{`${minExp || 0} years`}</h2>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          fullWidth
          style={{
            backgroundColor: "rgb(85, 239, 196)",
            fontWeight: "600",
            fontSize: "1.2rem",
            padding: "1.2rem 1.8rem",
            marginTop: "0.5rem",
            textTransform: "none",
          }}
        >
          <p>⚡ Easy Apply</p>
        </Button>
        <Button
          fullWidth
          style={{
            backgroundColor: "rgb(73, 67, 218)",
            fontWeight: "500",
            fontSize: "1.2rem",
            marginTop: "0.5rem",
            color: "#fff",
            textTransform: "none",
            padding: "0.6rem 2rem",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="referral-img"
              src="	https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group.png"
            />
            <Avatar
              alt="referral-img"
              src="https://weekday-logos-and-images.s3.eu-north-1.amazonaws.com/Mask+Group(1).png"
            />
            <p>Unlock Referral asks</p>
          </Box>
        </Button>
      </div>
    </Box>
  );
}

export default JobCard;
