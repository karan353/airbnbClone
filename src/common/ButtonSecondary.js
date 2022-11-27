import React from "react";
import styled from "styled-components";

export const ButtonSecondary = ({ text }) => {
  return (
    <Div>
      <button>{text}</button>
    </Div>
  );
};

const Div = styled.div`
  button {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    border-radius: 8px;
    padding: 14px 24px;
    border: 1px solid black;
    outline: none;
    color: black;
    cursor: pointer;
    background: #fff;
  }
`;
