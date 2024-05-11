import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { QUESTIONS } from '../../constants/questions';
import { background_q } from '../../assets/0_index';
import { bubble } from '../../assets/0_index';
import { IcArrow } from '../../assets/svgs/0_index';

const QuestionPage = ({ setPage, setResult }) => {
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [choices, setChoices] = useState([]);
  const [isActive, setIsActive] = useState(false);

  //질문 섞는 함수
  const shuffleChoices = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setIsActive(false);
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[step] = ''; // 배열의 인덱스는 0부터 시작하기 때문에 3번째 요소의 인덱스는 2입니다.
      return newChecked;
    });
    setChoices(shuffleChoices(QUESTIONS[step].choices));
  }, [step]);

  useEffect(() => {
    if (checked[step] !== '') setIsActive(true);
  }, [checked]);

  return (
    <Container background={background_q}>
      <header>
        <IcArrow />
      </header>
      <BubbleContainer>
        <Bubble src={bubble} />
        <QuestionText>{QUESTIONS[0].question}</QuestionText>
      </BubbleContainer>
    </Container>
  );
};

export default QuestionPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background_q});
  background-size: cover;
`;

const BubbleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bubble = styled.img`
  width: 95%;
`;

const QuestionText = styled.pre`
  position: absolute;
  top: 2.5rem;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  color: #8a5300;
`;
