import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Column>
            <Heading>Support</Heading>
            <FooterLink href="#">Help Centre</FooterLink>
            <FooterLink href="#">AirCover</FooterLink>
            <FooterLink href="#">Safety information</FooterLink>
            <FooterLink href="#">
              Supporting people with disabilities
            </FooterLink>
            <FooterLink href="#">Cancellation options</FooterLink>
            <FooterLink href="#">Our COVID-19 Response</FooterLink>
            <FooterLink href="#">Report a neighbourhood concern</FooterLink>
          </Column>
          <Column>
            <Heading>Community</Heading>
            <FooterLink href="#">
              Airbnb.org: disaster relief housing
            </FooterLink>
            <FooterLink href="#">Support Afghan refugees</FooterLink>
            <FooterLink href="#">Combating discrimination</FooterLink>
          </Column>
          <Column>
            <Heading>Hosting</Heading>
            <FooterLink href="#">Try hosting</FooterLink>
            <FooterLink href="#">AirCover for Hosts</FooterLink>
            <FooterLink href="#">Explore hosting resources</FooterLink>
            <FooterLink href="#">Visit our community forum</FooterLink>
            <FooterLink href="#">How to host responsibly</FooterLink>
          </Column>
          <Column>
            <Heading>Airbnb</Heading>
            <FooterLink href="#">Newsroom</FooterLink>
            <FooterLink href="#">Learn about new features</FooterLink>
            <FooterLink href="#">Letter from our founders</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Gift cards</FooterLink>
          </Column>
        </Row>
      </Container>
      <Div>© 2022 AirbnbClone, Inc.</Div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #222;
  font-size: 14px;
  margin: 9px 0;
  line-height: 18px;
  outline: none;
  text-decoration: none;

  &:hover {
    color: #717171;
    text-decoration: underline;
    transition: 400ms ease-in;
  }
`;

const Heading = styled.h3`
  color: black;
  margin-bottom: 20px;
`;

const Div = styled.div`
  border-top: 1px solid lightgrey;
  width: 70%;
  margin: 10px auto;
  text-align: center;
`;
