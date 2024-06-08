// src/pages/TermsAndConditions.js

import React from 'react';
import styled from 'styled-components';

const TermsAndConditions = () => {
  return (
    <Section>
      <Content>
        <h2>Terms and Conditions</h2>
        <p>
          Welcome to Manish Fantasy. By accessing or using our website, you agree to be bound by these terms and conditions. Please read them carefully.
        </p>
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using our website, you accept and agree to be bound by the terms and provisions of this agreement. Additionally, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>
        <h3>2. Provision of Services</h3>
        <p>
          Manish Fantasy is constantly innovating to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which Manish Fantasy provides may change from time to time without prior notice to you.
        </p>
        <h3>3. Privacy Policy</h3>
        <p>
          Your use of the website is also subject to the Manish Fantasy Privacy Policy. Please review our Privacy Policy, which also governs the website and informs users of our data collection practices.
        </p>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: 20px;
  background: #f4f4f4;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default TermsAndConditions;
