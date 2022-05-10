import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { UPLOAD_PATH, UPLOAD_URL } from "../../utils/api";

function MediaUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const http = useAxios();

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    console.log(formData);

    const responseData = await http.post(UPLOAD_PATH, formData);
    console.log(responseData);
  };

  return (
    <form>
      <input type="file" name="file" onChange={handleChange} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
        </div>
      ) : (
        <div>Select a file to show details</div>
      )}
      <button onClick={handleUpload}>Upload image</button>
    </form>
  );
}

export default MediaUpload;
