import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleChange = (e) => {
    let selected = e.target.files[0];

    const allowedTypes = ["image/png", "image/jpeg"];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setUploadError("");
    } else {
      setFile(null);
      setUploadError("Please select an image file(png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {uploadError && <div className="error">{uploadError}</div>}
        {file && <div className="success">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
