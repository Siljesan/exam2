import React, { useState } from "react";

function MediaUpload({ onChange }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (event) => {
    let f = event.target.files[0];
    console.log(f);
    setSelectedFile(f);
    onChange(f);
    setIsSelected(true);
  };

  return (
    <>
      <input type="file" name="file" onChange={handleChange} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
        </div>
      ) : (
        <div>Select a file to show details</div>
      )}
    </>
  );
}

export default MediaUpload;
