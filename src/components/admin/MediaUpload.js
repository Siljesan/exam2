import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { UPLOAD_PATH, UPLOAD_URL } from "../../utils/api";

function MediaUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const http = useAxios();

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    const responseData = await http
      .post(UPLOAD_PATH, {
        body: new FormData(e.target),
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(responseData);
  };

  return (
    <form className="mediaForm" onSubmit={handleUpload}>
      <input type="file" name="file" onChange={handleChange} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
        </div>
      ) : (
        <div>Select a file to show details</div>
      )}
      <button type="submit">Upload image</button>
    </form>
  );
}

export default MediaUpload;
