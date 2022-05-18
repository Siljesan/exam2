import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../../utils/Schemas";
import { Heading } from "../styles/StyledHeadings";

function ContactForm({ sendContact }) {
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (formData) => {
    sendContact(formData).catch((error) => setError(error));
  };
  return (
    <>
      {error ? (
        <div>
          <Heading as={"h2"}>Error</Heading>
          <p>The server responded with: {error.status}</p>
          <p>{error.message}</p>
        </div>
      ) : (
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
              <span className="contactForm__error">
                {errors.subject.message}
              </span>
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
              <span className="contactForm__error">
                {errors.message.message}
              </span>
            )}
          </label>

          <button>Send</button>
        </form>
      )}
    </>
  );
}

export default ContactForm;
