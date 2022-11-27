import React from "react";
import styled from "styled-components";

// component
import { ButtonSecondary } from "../common/ButtonSecondary";

// image
import questions from "../assets/questions.webp";

export const Question = () => {
  return (
    <Div>
      <h2>
        Questions about hosting? <br /> Ask a Superhost.
      </h2>
      <div>
        <ButtonSecondary text="Learn more" />
      </div>
    </Div>
  );
};

const Div = styled.div`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(calc(100vw - 96px) * 1440 / 2560);
    max-height: 990px;
    width: calc(100% - 96px);
    border-radius: 12px;
    margin: 57px auto;
    background-image: url(${questions});
    backgroundrepeat: "no-repeat";
    background-position: center;
    background-size: cover;
  }

  h2 {
    font-size: 38px;
    line-height: 43px;
    width: 70%;
    text-align: center;
    color: white;
    font-weight: 600;
    padding-bottom: 3rem;
  }

  @media (max-width: 772px) {
     {
      height: 100%;
      background-image: url(${questions});
      backgroundrepeat: "no-repeat";
      background-position: center;
      background-size: cover;
    }

    h2 {
      font-size: 20px;
      line-height: 33px;
      width: 70%;
      text-align: center;
      color: white;
      font-weight: 600;
      padding-bottom: 2rem;
      padding-top: 40px;
    }

    div {
      padding-bottom: 40px;
    }
  }
`;
