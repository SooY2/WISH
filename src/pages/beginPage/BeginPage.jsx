import React from 'react';
import { logo } from '../../assets/0_index';
import styled from 'styled-components';
import { beginIMG } from './assets/0_index';

const BeginPage = ({ setPage }) => {
  return (
    <Container>
      <Logo src={logo} />
      <TextContainer>
        <Text>행복한 가정의 달 5월,</Text>
        <Text>내 孝BTI를 가족과 공유해보세요!</Text>
      </TextContainer>
      <Img src={beginIMG} />
      <Button
        onClick={(e) => {
          e.preventDefault();
          setPage(1);
        }}
      >
        시작하기
      </Button>
    </Container>
  );
};

export default BeginPage;

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const Logo = styled.img`
  position: absolute;
  width: 8rem;
  top: 2rem;
  left: 2rem;
`;

const Text = styled.p`
  font-size: 2.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Img = styled.img`
  width: 100%;
`;

const Button = styled.button`
  width: 33rem;
  height: 6rem;
  border-radius: 20px;
  background-color: #8a5300;
  color: #fffeda;
  font-family: 'KCC-Jeongbeom';
  font-size: 3.5rem;
`;
