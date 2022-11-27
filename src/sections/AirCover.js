import React from "react";
import styled from "styled-components";

// component
import { ButtonSecondary } from "../common/ButtonSecondary";

// images
import aircover from "../assets/aircover.webp";
import aircover_img2 from "../assets/aircover_img2.webp";
import aircover_img3 from "../assets/aircover_img3.png";

export const AirCover = () => {
  return (
    <>
      {/* desktop display */}
      <Div>
        <div>
          <img src={aircover} />
          <p>
            Top-to-bottom protection.
            <br />
            Always included, always&nbsp;free.
            <br />
            Only on Airbnb.
          </p>
          <div>
            <ButtonSecondary text="Learn more" />
          </div>
        </div>
        <img src={aircover_img2} />
      </Div>
      {/* mobile display */}
      <Mobile>
        <img src={aircover_img3} />
        <p>
          Top-to-bottom protection.
          <br />
          Always included, always&nbsp;free.
          <br />
          Only on Airbnb.
        </p>
        <div>
          <ButtonSecondary text="Learn more" />
        </div>
      </Mobile>
    </>
  );
};

const Div = styled.div`
   {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    background-color: #f7f7f7;
    height: 768px;
    max-width: 1760px;
    width: calc(100% - 96px);
    border-radius: 12px;
    margin: 57px auto;
  }

  div {
    object-fit: contain;
    height: 70%;
    width: 50%;

    img {
      margin-left: 4rem;
    }
    p {
      margin: 40px 0 50px 0;
      max-width: 460px;
      font-weight: 400;
      color: #222222;
      font-size: 32px;
      line-height: 36px;
      margin-left: 4rem;
    }
    div {
      width: 100%;
      padding-left: 30px;
    }
  }

  img {
    object-fit: contain;
    width: 50%;
  }

  @media (max-width: 702px) {
     {
      display: none;
    }
  }
`;

const Mobile = styled.div`
   {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;

    img {
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      height: auto;
    }

    p {
      color: #222222;
      font-size: 32px;
      line-height: 36px;
      margin: 30px 0 37px 0;
      font-weight: 600;
    }

    @media (min-width: 702px) {
      {
       display: none;
     }
  }
`;
