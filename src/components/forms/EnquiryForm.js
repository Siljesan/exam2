import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnquirySchema } from "../../utils/Schemas";
import { Heading } from "../styles/StyledHeadings";

function EnquiryForm({ sendEnquiry }) {
  const [error, setError] = useState();

  // react hook form checks for errors, and register formData.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EnquirySchema),
  });

  // sends data and sets error to display error message.
  const onSubmit = (formData) => {
    sendEnquiry(formData).catch((error) => setError(error));
  };
  return (
    <>
      {error ? (
        <div>
          <Heading as={"h2"}>Something went wrong</Heading>
          <p>{error.message}</p>
        </div>
      ) : (
        <form className="enquiryForm" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Enter your email
            <input {...register("email")} placeholder="email..." id="email" />
            {errors.email && (
              <span className="enquiryForm__error">{errors.email.message}</span>
            )}
          </label>

          <div className="flex">
            <label>
              Enter date from
              <input {...register("datefrom")} placeholder="DD/MM/YYYY" />
              {errors.datefrom && (
                <span className="enquiryForm__error">
                  {errors.datefrom.message}
                </span>
              )}
            </label>
            /
            <label>
              until
              <input {...register("dateto")} placeholder="DD/MM/YYYY" />
              {errors.dateto && (
                <span className="enquiryForm__error">
                  {errors.dateto.message}
                </span>
              )}
            </label>
          </div>
          <label>
            Enter additional information
            <textarea
              {...register("information")}
              placeholder="write your message..."
              id="information"
            />
            {errors.information && (
              <span className="enquiryForm__error">
                {errors.information.message}
              </span>
            )}
          </label>

          <button>Send enquiry</button>
        </form>
      )}
    </>
  );
}

export default EnquiryForm;
