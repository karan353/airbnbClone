import React from "react";
import styled from "styled-components";

export default function Button({ text, color = false }) {
  return (
    <Div>
      <button className={`${color ? "color" : ""}`}>{text}</button>
    </Div>
  );
}

const Div = styled.div`
  button {
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    border-radius: 8px;
    padding: 14px 24px;
    border: none;
    color: white;
    cursor: pointer;
    :not(.color) {
      background-color: transparent;
      border: 1px solid white;
    }
  }
  .color {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
  }
`;
