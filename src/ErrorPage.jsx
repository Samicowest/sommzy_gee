import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <Message>Oops! Something went wrong.</Message>
      <Description>
        The page you’re looking for can’t be found. Please check the URL or try
        again later.
      </Description>
      <RetryButton onClick={() => window.location.reload()}>Retry</RetryButton>
    </Container>
  );
};

export default ErrorPage;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  margin: 0;
  color: #ff6b6b;
`;

const Message = styled.h2`
  font-size: 2rem;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 400px;
  margin: 10px 0;
`;

const RetryButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #ff6b6b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4d4d;
  }
`;
