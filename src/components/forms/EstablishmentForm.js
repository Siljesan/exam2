import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import { ESTABLISHMENT_PATH } from "../../utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { EstablishmentSchema } from "../../utils/Schemas";
import { Heading } from "../styles/StyledHeadings";
import MediaUpload from "../admin/MediaUpload";

function EstablishmentForm({ onEstablishmentAdded }) {
  const [coverImage, setCoverImage] = useState();
  const [error, setError] = useState();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EstablishmentSchema),
  });

  const onCoverImageChanged = (file) => {
    setCoverImage(file);
  };

  const sendEstablishment = async (formData) => {
    const data = {
      title: formData.title,
      punchline: formData.punchline,
      description: formData.description,
      featured: formData.featured,
    };

    let body = new FormData();
    body.append("files.coverimage", coverImage, coverImage.name);
    body.append("data", JSON.stringify(data));

    const responseData = await http.post(ESTABLISHMENT_PATH, body);

    console.log(responseData);

    if (responseData.statusText == "OK") {
      onEstablishmentAdded && onEstablishmentAdded();
    } else {
      setError(responseData.statusText);
    }
  };

  const onSubmit = (formData) => {
    sendEstablishment(formData).catch((error) => setError(error));
  };

  return (
    <>
      {error ? (
        <div>
          <Heading as={"h2"}>Something went wrong</Heading>
          <p>{error.message}</p>
        </div>
      ) : (
        <form className="establishmentForm" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Establishment title
            <input {...register("title")} />
            {errors.title && (
              <span className="establishmentForm__error">
                {errors.title.message}
              </span>
            )}
          </label>

          <label>
            Establishment punchline
            <input {...register("punchline")} />
            {errors.punchline && (
              <span className="establishmentForm__error">
                {errors.punchline.message}
              </span>
            )}
          </label>

          <label>
            Establishment description
            <textarea {...register("description")} />
            {errors.description && (
              <span className="establishmentForm__error">
                {errors.description.message}
              </span>
            )}
          </label>

          <div className="establishmentForm__flex">
            <div>
              <MediaUpload onChange={onCoverImageChanged} />
            </div>
            <label>
              Featured{" "}
              <input
                className="establishmentForm__featured"
                {...register("featured")}
                type="checkbox"
              />
            </label>
          </div>
          <button type="submit">Add establishment</button>
        </form>
      )}
    </>
  );
}

export default EstablishmentForm;
