import React from "react";
import styled from "styled-components";

// component
import Button from "../common/Button";

export const Ukraine = () => {
  return (
    <Div>
      <h2>
        Help house 100,000 refugees fleeing <br />
        Ukraine
      </h2>
      <Button text="Learn more" />
    </Div>
  );
};

const Div = styled.div`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1760px;
    width: calc(100% - 96px);
    min-height: 360px;
    background-color: #ff385c;
    border-radius: 12px;
    margin: 57px auto;
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
`;
