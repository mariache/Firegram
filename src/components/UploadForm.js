import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const changeHandler = (e) => {
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
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {uploadError && <div className="error">{uploadError}</div>}
        {file && <div className="success">{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
