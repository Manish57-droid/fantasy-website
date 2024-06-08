// src/components/Footer.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    const templateParams = {
      user_email: email,
      whatsapp_link: 'https://chat.whatsapp.com/your-whatsapp-link', // Replace with your actual WhatsApp joining link
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setMessage('Joining link sent to your email!');
      })
      .catch((err) => {
        console.error('Failed to send email.', err);
        setMessage('Failed to send joining link. Please try again.');
      });
  };

  return (
    <FooterContainer>
      <DownloadButton href="/sample.pdf" download>
        Download File
      </DownloadButton>
      <FooterContent>
        <FooterLinks>
          <StyledLink to="/about-us">About Us</StyledLink>
          <StyledLink to="/terms-and-conditions">Terms and Conditions</StyledLink>
          <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
          <StyledLink to="/game-addiction">Game Addiction</StyledLink>
        </FooterLinks>
        <FooterInfo>
          <p>&copy; 2024 Manish Fantasy. All rights reserved.</p>
          <p>Contact us at <a href="mailto:contact@manishfantasy.com">contact@manishfantasy.com</a></p>
        </FooterInfo>
        <JoinUsContainer>
          <JoinUsForm onSubmit={handleFormSubmit}>
            <JoinUsInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <JoinUsButton type="submit">Join Us</JoinUsButton>
          </JoinUsForm>
          {message && <Message>{message}</Message>}
        </JoinUsContainer>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DownloadButton = styled.a`
  background: #ffd700;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #ffa500;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FooterLinks = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterInfo = styled.div`
  p {
    margin: 5px 0;
  }

  a {
    color: #ffd700;
    text-decoration: none;
  }
`;

const JoinUsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinUsForm = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: none;
    gap: 5px;
  }
`;

const JoinUsInput = styled.input`
  padding: 10px;
  flex: 1;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

const JoinUsButton = styled.button`
  background: #ffd700;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #ffa500;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: ${props => (props.error ? 'red' : 'green')};
`;

export default Footer;
