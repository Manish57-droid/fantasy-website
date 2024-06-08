// src/pages/GameAddiction.js

import React from 'react';
import styled from 'styled-components';

const GameAddiction = () => {
  return (
    <Section>
      <Content>
        <h2>Game Addiction</h2>
        <p>
          At Manish Fantasy, we are dedicated to creating a fun and engaging environment for our players. However, we also recognize the importance of promoting healthy gaming habits and addressing the issue of game addiction.
        </p>
        <h3>Recognizing Game Addiction</h3>
        <p>
          Game addiction is characterized by excessive or compulsive use of video games that interferes with daily life. Symptoms may include neglecting personal responsibilities, experiencing withdrawal symptoms when not playing, and losing interest in other activities.
        </p>
        <h3>Tips for Healthy Gaming</h3>
        <p>
          To ensure a balanced gaming experience, consider the following tips:
        </p>
        <ul>
          <li>Set time limits for gaming sessions.</li>
          <li>Take regular breaks to rest your eyes and mind.</li>
          <li>Engage in other hobbies and physical activities.</li>
          <li>Maintain social connections outside of gaming.</li>
          <li>Be mindful of your physical and mental health.</li>
        </ul>
        <h3>Getting Help</h3>
        <p>
          If you or someone you know is struggling with game addiction, it is important to seek help. There are many resources available, including counseling services and support groups, that can provide assistance and support.
        </p>
      </Content>
      <ImageContainer>
        <img src="/manish-fantasy/public/awareness.png" alt="Game Addiction Awareness" />
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

  h3 {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;

    li {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p, li {
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

export default GameAddiction;
