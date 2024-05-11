import styled from 'styled-components';
import React, { useState } from 'react';
import QuestionPage from './questionPage/QuestionPage';
import EndPage from './endPage/EndPage';
import { background } from '../assets/0_index';
import BeginPage from './beginPage/BeginPage';

export const MainPage = () => {
  const [page, setPage] = useState(0);
  const [result, setResult] = useState('');

  const renderPage = (thispage) => {
    switch (thispage) {
      case 0:
        return <BeginPage setPage={setPage} />;
      case 1:
        return (
          <QuestionPage setPage={setPage} setResult={setResult}></QuestionPage>
        );
      case 2:
        return <EndPage result={result} setPage={setPage} />;
      default:
        break;
    }
  };
  return <Container>{renderPage(page)}</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 480px;
  margin: 0 auto;
  overflow: hidden;
  background-image: url(${background});
`;
