import React from "react";
import styled from "styled-components";

// component
import Button from "../common/Button";

// setting up video
import video2 from "../assets/video/video2.webm";

export const LetsGo = () => {
  return (
    <>
      {/* desktop display */}
      <Conatiner>
        <Video>
          <video
            autoPlay
            loop
            muted
            aria-label="Three different Hosts prepare their places for their guests to arrive. The first Host, a woman, sets out fresh baked bread. The second Host, a man, writes a welcome note for his guest. The third Host, a woman, put a bowl of lemons on her table."
          >
            <source type="video/mp4" src={video2} />
          </video>
        </Video>
        <Black>
          <h2>
            Try hosting on <br />
            Airbnb
          </h2>
          <p>
            Join us. We’ll help you every <br />
            step of the way.
          </p>
          <Button color text="Let's go" />
        </Black>
      </Conatiner>
      {/* mobile display */}
      <Mobile>
        <VideoMobile>
          <video
            autoPlay
            loop
            muted
            aria-label="Three different Hosts prepare their places for their guests to arrive. The first Host, a woman, sets out fresh baked bread. The second Host, a man, writes a welcome note for his guest. The third Host, a woman, put a bowl of lemons on her table."
          >
            <source type="video/mp4" src={video2} />
          </video>
        </VideoMobile>
        <MobileContainer>
          <h2>
            Try hosting on <br />
            Airbnb
          </h2>
          <p>
            Join us. We’ll help you every <br />
            step of the way. step of the way.
          </p>
          <div>
            <Button color text="Let's go" />
          </div>
        </MobileContainer>
        <div />
      </Mobile>
    </>
  );
};

// desktop

const Conatiner = styled.div`
   {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 132px);
    min-height: 450px;
  }

  @media (max-width: 950px) {
    {
     display: none;
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

  h2 {
    margin-bottom: 48px;
    font-size: 32px;
    line-height: 36px;
    font-weight: 600;
    color: white;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    color: white;
    margin-bottom: 38px;
  }
`;

const Video = styled.div`
   {
    height: 100%;
    width: 50%;
  }

  @media (max-width: 950px) {
    display: none;
  }

  video {
    height: 100%;
    width: 100%;
    overflow: hidden !important;
    object-fit: cover;
    object-position: top;
  }
`;

// mobile

const Mobile = styled.div`
   {
    postion: relative;
    margin-top: 40px;

    div {
      width: 100%;
      height: 400px;

      @media (min-width: 950px) {
        {
         display: none;
       }
    }
  }
`;

const VideoMobile = styled.div`
   {
    height: 300px;
    width: 100%;
    z-index: -99999;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: -99999;
    }

    @media (min-width: 950px) {
      {
       display: none;
     }
  }
`;

const MobileContainer = styled.div`
   {
    display: flex;
    flex-direction: column;
    background: #000;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    z-index: 10;
    position: absolute;
    width: 100%;
    margin-top: -10px;
  }

  h2 {
    padding-top: 4rem;
    padding-left: 48px;
    font-size: 32px;
    line-height: 36px;
    color: white;
  }

  p {
    padding: 2rem 0;
    padding-left: 48px;
    font-size: 18px;
    line-height: 26px;
    color: white;
  }

  div {
    padding-left: 23px;
    padding-bottom: 2rem;
  }

  @media (min-width: 950px) {
     {
      display: none;
    }
  }
`;
