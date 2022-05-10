import React from "react";

function MediaUpload({ uploadMedia }) {
  const onSubmit = (formData) => {
    uploadMedia(formData).catch(console.error);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type={file} name="cover" />
      <button>Upload file</button>
    </form>
  );
}

export default MediaUpload;
