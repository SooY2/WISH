import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { QUESTIONS } from '../../constants/questions';
import {
  background_q,
  background_q_1,
  background_q_2,
  button_q,
} from '../../assets/0_index';
import { bubble } from '../../assets/0_index';
import { IcArrow } from '../../assets/svgs/0_index';

const QuestionPage = ({ setPage, setResult }) => {
  const [step, setStep] = useState(0);
  const [bg, setBg] = useState(background_q);
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

    if (step >= 0 && step < 4) setBg(background_q);
    else if (step < 8) setBg(background_q_1);
    else if (step < 12) setBg(background_q_2);
    else return;
  }, [step]);

  useEffect(() => {
    if (checked[step] !== '') setIsActive(true);
  }, [checked]);

  return (
    <Container $background={bg}>
      <header>
        <IcArrow />
      </header>
      <BubbleContainer>
        <Bubble src={bubble} />
        <QuestionText>{QUESTIONS[0].question}</QuestionText>
      </BubbleContainer>
      <BtnContainer>
        <BtnWrapper>
          <Btn src={button_q} alt='버튼' />
          <AnswerText>{QUESTIONS[0].choices[0].content}</AnswerText>
        </BtnWrapper>
        <BtnWrapper>
          <Btn src={button_q} alt='버튼' />
          <AnswerText>{QUESTIONS[0].choices[1].content}</AnswerText>
        </BtnWrapper>
      </BtnContainer>
    </Container>
  );
};

export default QuestionPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Text = styled.pre`
  position: absolute;

  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  color: #8a5300;
`;

const QuestionText = styled(Text)`
  top: 2.5rem;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const BtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerText = styled(Text)`
  position: absolute;
  font-size: 1.8rem;
`;

const Btn = styled.img`
  width: 33rem;
`;
