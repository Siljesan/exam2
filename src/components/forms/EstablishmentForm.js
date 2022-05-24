import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EstablishmentSchema } from "../../utils/Schemas";
import { Heading } from "../styles/StyledHeadings";

function EstablishmentForm({ addEstablishment }) {
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EstablishmentSchema),
  });

  const onSubmit = (formData) => {
    addEstablishment(formData).catch((error) => setError(error));
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

          <label>
            Image url
            <input {...register("coverimageurl")} />
            {errors.coverimageurl && (
              <span className="establishmentForm__error">
                {errors.coverimageurl.message}
              </span>
            )}
          </label>

          <label>
            Featured{" "}
            <input
              className="establishmentForm__featured"
              {...register("featured")}
              type="checkbox"
            />
          </label>

          <button>Add establishment</button>
        </form>
      )}
    </>
  );
}

export default EstablishmentForm;
