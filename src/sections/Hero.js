import React from "react";
import styled from "styled-components";

// component
import Button from "../common/Button";

// doors opening video
import video from "../assets/video/video.webm";

export const Hero = () => {
  return (
    <HeroConatiner>
      <Black>
        <h1>
          Open your door <br />
          to hosting
        </h1>
        <Button color text="Try Hosting" />
      </Black>
      <Video>
        <video
          autoPlay
          loop
          muted
          aria-label="Chelsea, a Host in Philadelphia, smiles as she opens the door. Soraya, a Host in Mumbai, smiles as she opens a front door with another person beside her. Mohamed, a Host in Johannesburg, smiles as he opens a door. Maria, a Host in Mexico City, nods and smiles as she carries a plant away."
        >
          <source type="video/mp4" src={video} />
        </video>
      </Video>
    </HeroConatiner>
  );
};

const HeroConatiner = styled.div`
   {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 132px) !important;
    min-height: 450px !important;
  }
`;

const Black = styled.div`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    background: #000;
  }

  @media (max-width: 950px) {
    display: none;
  }

  h1 {
    margin-bottom: 52px;
    font-size: 64px;
    line-height: 70px;
    color: white;
  }
`;

const Video = styled.div`
   {
    height: 100%;
    width: 50%;
  }

  @media (max-width: 950px) {
    width: 100%;
  }

  video {
    height: 100%;
    width: 100%;
    overflow: hidden !important;
    object-fit: cover;
    object-position: top;
  }
`;
