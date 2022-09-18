import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Duck from "../assets/duck.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Duck} alt="" />
      <h1>
        Welcome back, <span>{userName}!</span>
      </h1>
      <h3>Select a chat to start messaging</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #9a86f3;
  }
`;
