// src/pages/AboutUs.js

import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Section>
      <Content>
        <h2>About Us</h2>
        <p>
          Welcome to Manish Fantasy! Our mission is to create an immersive and engaging fantasy world where players can explore, battle, and create their own adventures. We are passionate about providing a rich gaming experience that combines stunning visuals, compelling storylines, and dynamic gameplay.
        </p>
        <p>
          Founded in 2024, Manish Fantasy has grown from a small team of dedicated developers into a thriving community of gamers from around the world. Our game is built on the principles of creativity, inclusivity, and continuous improvement. We listen to our players and constantly strive to enhance the game with new features and content.
        </p>
        <p>
          Join us on this exciting journey and become a part of the Manish Fantasy universe. Together, we can explore uncharted territories, conquer formidable foes, and forge lasting friendships.
        </p>
      </Content>
      <ImageContainer>
        <img src="/team.jpg" alt="Our Team" />
      </ImageContainer>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f4f4f4;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
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

    p {
      font-size: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 20px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export default AboutUs;
