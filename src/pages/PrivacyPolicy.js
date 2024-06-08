// src/pages/PrivacyPolicy.js

import React from 'react';
import styled from 'styled-components';

const PrivacyPolicy = () => {
  return (
    <Section>
      <Content>
        <h2>Privacy Policy</h2>
        <p>
          Manish Fantasy is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>
        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal information from you such as your name, email address, and other contact details when you sign up for our services or interact with our website.
        </p>
        <h3>2. How We Use Your Information</h3>
        <p>
          The information we collect is used to provide and improve our services, communicate with you, and ensure a safe and secure experience on our website.
        </p>
        <h3>3. Sharing Your Information</h3>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
        </p>
        <h3>4. Your Consent</h3>
        <p>
          By using our website, you consent to our Privacy Policy.
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

export default PrivacyPolicy;
