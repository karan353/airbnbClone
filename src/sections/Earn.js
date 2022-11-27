import React from "react";
import styled from "styled-components";

// image
import superHost from "../assets/superHost.webp";

export const Earn = () => {
  return (
    <>
      <Title>Airbnb it easily with Airbnb Setup</Title>
      <Image>
        <img src={superHost} />
      </Image>
      <Row>
        <div className="column">
          <h3>One-to-one guidance from a Superhost</h3>
          <p>
            We’ll match you with a Superhost in your area, who’ll guide you from
            your first question to your first guest—by phone, video call, or
            chat.
          </p>
        </div>
        <div className="column">
          <h3>An experienced guest for your first booking</h3>
          <p>
            For your first booking, you can choose to welcome an experienced
            guest who has at least three stays and a good track record on
            Airbnb.
          </p>
        </div>
        <div className="column">
          <h3>Specialized support from Airbnb</h3>
          <p>
            New Hosts get one-tap access to specially trained Community Support
            agents who can help with everything from account issues to billing
            support.
          </p>
        </div>
      </Row>
    </>
  );
};

const Title = styled.h2`
   {
    text-align: center;
    margin: 40px 0;
  }
`;

const Image = styled.div`
   {
    width: 95%;
    margin: auto;

    img {
      width: 100%;
    }
  }
`;

const Row = styled.div`
  .column {
    width: 100%;
    margin: 20px 20px;
  }

  @media (min-width: 48em) {
     {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
    }
  }
`;
