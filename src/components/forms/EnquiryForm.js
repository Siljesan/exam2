import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnquirySchema } from "../../utils/Schemas";

function EnquiryForm({ sendEnquiry }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EnquirySchema),
  });

  const onSubmit = (formData) => {
    sendEnquiry(formData).catch(console.error);
  };
  return (
    <>
      <form className="enquiryForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter your email:
          <input {...register("email")} placeholder="email..." id="email" />
          {errors.email && (
            <span className="enquiryForm__error">{errors.email.message}</span>
          )}
        </label>

        <label>
          Enter date of visit:
          <input {...register("date")} placeholder="date..." id="date" />
          {errors.date && (
            <span className="enquiryForm__error">{errors.date.message}</span>
          )}
        </label>

        <label>
          Enter additional information:
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
    </>
  );
}

export default EnquiryForm;
