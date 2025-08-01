import styled from "styled-components";
import "leaflet/dist/leaflet.css";

import ContactForm from "../ui/ContactForm";
import Map from "../ui/Map";

const StyledContact = styled.div`
  height: calc(100vh - 170px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }

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
`;

function Contact() {
  return (
    <StyledContact>
      <ContactForm />
      <Map />
    </StyledContact>
  );
}

export default Contact;
