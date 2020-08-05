import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      progress
    </div>
  );
};

export default ProgressBar;
