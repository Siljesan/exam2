import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EnquirySchema } from "../utils/Schemas";

function EnquiryForm({ sendEnquiry }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EnquirySchema),
  });

  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    sendEnquiry(formData).catch(console.error);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter your email:
          <input {...register("email")} placeholder="email..." id="email" />
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <label>
          Enter date of visit:
          <input {...register("date")} placeholder="date..." id="date" />
          {errors.date && <span>{errors.date.message}</span>}
        </label>

        <label>
          Enter additional information:
          <input
            {...register("information")}
            placeholder="write your message..."
            id="information"
          />
          {errors.information && <span>{errors.information.message}</span>}
        </label>

        <button>Send enquiry</button>
      </form>
    </>
  );
}

export default EnquiryForm;
