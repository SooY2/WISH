import styled from 'styled-components';
import React, { useState } from 'react';
import QuestionPage from './questionPage/QuestionPage';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState('');

  const renderPage = (thispage) => {
    switch (thispage) {
      case 0:
        return;
      // <BeginPage setPage={setPage} />;
      case 1:
        return (
          <QuestionPage setPage={setPage} setResult={setResult}></QuestionPage>
        );
      case 2:
        return;
      // <EndPage result={result}></EndPage>;
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
`;
