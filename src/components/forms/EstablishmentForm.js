import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EstablishmentSchema } from "../../utils/Schemas";

function EstablishmentForm({ addEstablishment }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EstablishmentSchema),
  });

  const onSubmit = (formData) => {
    addEstablishment(formData).catch(console.error);
  };
  return (
    <>
      <form className="establishmentForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Establishment title:
          <input {...register("title")} />
          {errors.title && (
            <span className="establishmentForm__error">
              {errors.title.message}
            </span>
          )}
        </label>

        <label>
          Establishment punchline:
          <input {...register("punchline")} />
          {errors.punchline && (
            <span className="establishmentForm__error">
              {errors.punchline.message}
            </span>
          )}
        </label>

        <label>
          Establishment description:
          <textarea {...register("description")} />
          {errors.description && (
            <span className="establishmentForm__error">
              {errors.description.message}
            </span>
          )}
        </label>

        <button>Add establishment</button>
      </form>
    </>
  );
}

export default EstablishmentForm;
