import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../../utils/Schemas";

function ContactForm({ sendContact }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    sendContact(formData).catch(console.error);
  };
  return (
    <>
      <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter your email:
          <input {...register("email")} placeholder="email..." id="email" />
          {errors.email && (
            <span className="contactForm__error">{errors.email.message}</span>
          )}
        </label>

        <label>
          Enter subject:
          <input
            {...register("subject")}
            placeholder="subject..."
            id="subject"
          />
          {errors.subject && (
            <span className="contactForm__error">{errors.subject.message}</span>
          )}
        </label>

        <label>
          Enter your message:
          <textarea
            {...register("message")}
            placeholder="write your message..."
            id="message"
          />
          {errors.message && (
            <span className="contactForm__error">{errors.message.message}</span>
          )}
        </label>

        <button>Send</button>
      </form>
    </>
  );
}

export default ContactForm;
