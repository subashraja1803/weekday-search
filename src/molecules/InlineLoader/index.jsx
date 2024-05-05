import { CircularProgress } from "@mui/material";
import React from "react";

function InlineLoader({ styles, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "2rem",
        ...styles,
      }}
    >
      <CircularProgress color={color || "primary"} thickness={5} />
    </div>
  );
}

export default InlineLoader;
