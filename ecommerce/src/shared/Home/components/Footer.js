import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> BookRental </span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  text-align: center;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export default Footer;
