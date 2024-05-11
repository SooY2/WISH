import styled from 'styled-components';
import React from 'react';

export const MainPage = () => {
  return <Container>메인 뷰입니다</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 480px;
  margin: 0 auto;
  overflow: hidden;
  background: beige;
`;
