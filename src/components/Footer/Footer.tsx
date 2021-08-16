import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <FooterItem>
        <p>📧 Email:</p>
        <p>yunyounghoon23@gmail.com</p>
      </FooterItem>
      <a
        target="_blank"
        href="https://velog.io/@yoonyounghoon"
        rel="noreferrer"
      >
        <FooterItem>
          <p>📙 Blog:</p>
          <p>https://velog.io/@yoonyounghoon</p>
        </FooterItem>
      </a>
      <a
        target="_blank"
        href="https://github.com/yoonyounghoon"
        rel="noreferrer"
      >
        <FooterItem>
          <p>📢:</p>
          <p>https://github.com/yoonyounghoon</p>
        </FooterItem>
      </a>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f5f6fa;
`;

const FooterItem = styled.div`
  display: flex;
  text-align: left;
  padding: 0.5rem 0;
  &:hover {
    background-color: #3095e9;
    color: white;
  }
  p {
    margin-right: 8px;
    overflow: hidden;
  }
`;
