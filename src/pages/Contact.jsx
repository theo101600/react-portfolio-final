import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { FaMailBulk, FaSmile } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import Button from "../ui/Button";
import { useState } from "react";
import toast from "react-hot-toast";

const formAccessToken = import.meta.env.VITE_WEB3FORM_TOKEN;

const StyledContact = styled.div`
  height: calc(100vh - 170px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 1rem;

  @media (max-width: 550px) {
    height: calc(100vh - 100px);
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-text-a-1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }

  .leaflet-container {
    height: 400px;
    width: 100%;
    margin: 2rem 0;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  flex-wrap: wrap;
  svg {
    margin: 0 3rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 300px;
  width: 100%;
  max-width: 400px;

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

function Contact() {
  const { isDarkMode } = useDarkMode();
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
    <StyledContact>
      <MapContainer
        center={[14.5995, 120.9842]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={
            isDarkMode
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />
        <Marker position={[14.5995, 120.9842]}>
          <Popup>
            <h1>
              I'm here <FaSmile />
            </h1>
          </Popup>
        </Marker>
      </MapContainer>
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
              Email address
            </label>
            <textarea id="message" placeholder="Enter your message" required />
          </div>
          <Button>Submit</Button>
        </StyledForm>
      </StyledFormContainer>
    </StyledContact>
  );
}

export default Contact;
