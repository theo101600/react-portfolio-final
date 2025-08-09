import styled from "styled-components";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaMailBulk } from "react-icons/fa";
import Button from "./Button";

const formAccessToken = import.meta.env.VITE_WEB3FORM_TOKEN;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;

  svg {
    margin: 0 3rem;
  }
  @media (max-width: 1400px) {
    flex-direction: row;
  }
  @media (max-width: 600px) {
    svg {
      display: none;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 8px;
    background-color: var(--color-text-a-0);
    color: var(--color-text-b-0);
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--color-primary);
    }

    &::placeholder {
      color: #aaa;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

function ContactForm() {
  const [result, setResult] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${formAccessToken}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Email sent!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Sending email failed!");
    }
  };

  return (
    <StyledFormContainer>
      <FaMailBulk size={150} />
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" name="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <Button>Submit</Button>
      </StyledForm>
    </StyledFormContainer>
  );
}

export default ContactForm;
