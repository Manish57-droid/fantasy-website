// src/pages/Home.js

import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Section>
      <div>
        <img src="/manish-fantasy/src/pages/awareness.png" alt="" srcset="" />
      </div>
      <Hero>
        <HeroText>Welcome to Manish Fantasy</HeroText>
      </Hero>
      <Intro>
        <h2>Explore the World of Manish Fantasy</h2>
        <p>
          Manish Fantasy is your gateway to a world of adventure and excitement. 
          Immerse yourself in epic quests, discover hidden treasures, and forge 
          your path in a land full of mysteries and magic.
        </p>
      </Intro>
      <Features>
        <Feature>
          <FeatureTitle>Epic Quests</FeatureTitle>
          <FeatureDescription>
            Engage in thrilling quests that take you across the vast and beautiful 
            landscapes of our fantasy world.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Unique Characters</FeatureTitle>
          <FeatureDescription>
            Meet a diverse array of characters, each with their own stories, 
            abilities, and secrets to uncover.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Multiplayer Battles</FeatureTitle>
          <FeatureDescription>
            Challenge your friends and other players in intense multiplayer 
            battles to prove your dominance.
          </FeatureDescription>
        </Feature>
      </Features>
    </Section>
  );
};

const Section = styled.section`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Hero = styled.div`
  background: url('/path/to/your/image.jpg') no-repeat center center/cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const HeroText = styled.h1`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Intro = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Feature = styled.div`
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

export default Home;
