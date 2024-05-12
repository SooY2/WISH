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
import { QUESTIONSIMGS } from '../../constants/questionIMGS';
import { getSpeech } from '../../utils/getSpeech';

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
  ]);

  //질문 섞는 함수
  const shuffleChoices = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    window.speechSynthesis.getVoices();
    getSpeech(QUESTIONS[step].question);
    if (step >= 0 && step < 4) setBg(background_q);
    else if (step < 8) setBg(background_q_1);
    else if (step < 12) setBg(background_q_2);
    else return;
  }, [step]);

  return (
    <Container $background={bg}>
      <StIcArrow
        onClick={() => {
          step > 0 ? setStep(step - 1) : {};
        }}
      />
      <BubbleContainer>
        <Bubble src={bubble} />
        <QuestionText>{QUESTIONS[step].question}</QuestionText>
      </BubbleContainer>
      <StImage src={QUESTIONSIMGS[step]} />
      <BtnContainer>
        <BtnWrapper
          onClick={(e) => {
            e.preventDefault();
            setChecked((prevChecked) => {
              const newChecked = [...prevChecked];
              newChecked[step] = QUESTIONS[step].choices[0].category; // 배열의 인덱스는 0부터 시작하기 때문에 3번째 요소의 인덱스는 2입니다.
              return newChecked;
            });
            if (step === QUESTIONS.length - 1) {
              setResult([...checked, QUESTIONS[step].choices[0].category]);
              setPage(2);
              return;
            }
            setStep(step + 1);
          }}
        >
          <Btn src={button_q} alt='버튼' />
          <AnswerText>{QUESTIONS[step].choices[0].content}</AnswerText>
        </BtnWrapper>
        <BtnWrapper
          onClick={(e) => {
            e.preventDefault();
            setChecked((prevChecked) => {
              const newChecked = [...prevChecked];
              newChecked[step] = QUESTIONS[step].choices[1].category; // 배열의 인덱스는 0부터 시작하기 때문에 3번째 요소의 인덱스는 2입니다.
              return newChecked;
            });
            if (step === QUESTIONS.length - 1) {
              setResult([...checked, QUESTIONS[step].choices[0].category]);
              setPage(2);
              return;
            }
            setStep(step + 1);
          }}
        >
          <Btn src={button_q} alt='버튼' />
          <AnswerText>{QUESTIONS[step].choices[1].content}</AnswerText>
        </BtnWrapper>
      </BtnContainer>
      <Footer>
        <Text>{`남은 질문 : ${11 - step}`}</Text>
      </Footer>
    </Container>
  );
};

export default QuestionPage;

const StIcArrow = styled(IcArrow)`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  font-size: 2.5rem;
  line-height: 3rem;
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
  font-size: 3rem;
`;

const Btn = styled.img`
  width: 33rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const StImage = styled.img`
  width: 95%;
  max-width: 30rem;
`;
