import React from 'react';
import styled from 'styled-components';
import { textbox } from '../../assets/0_index';
import { MBTIS } from '../../constants/mbtis';
import { calcResult } from '../../utils/calcResult';
import CopyLink from './CopyLink';

const EndPage = ({ result, setPage }) => {
  const calValue = calcResult(result);
  console.log(calValue);
  const idx = MBTIS.findIndex((item) => item.mbti === calValue);

  return (
    <Container>
      <StMbtiTitleIMG src={MBTIS[idx].mbtiTitleIMG} />
      <Text>{MBTIS[idx].mbtiKo}</Text>
      <StMbtiTitleIMG src={MBTIS[idx].mbtiIMG}></StMbtiTitleIMG>
      <TextContainer>
        <TextBox src={textbox} />
        <TextPre1>{MBTIS[idx].mbtiTitle}</TextPre1>
        <TextPre2>{MBTIS[idx].mbtiText}</TextPre2>
      </TextContainer>
      <BtnContainer>
        <Btn
          onClick={(e) => {
            e.preventDefault();
            setPage(0);
          }}
        >
          다시하기
        </Btn>
        <CopyLink content='링크 공유하기' />
      </BtnContainer>
    </Container>
  );
};

export default EndPage;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Text = styled.p`
  font-size: 2.5rem;
  color: #8a5300;
`;

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextBox = styled.img`
  top: 0;
  left: 0;
  width: 35rem;
`;

const TextPre = styled.pre`
  position: absolute;
`;

const TextPre1 = styled(TextPre)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2.3rem;
  top: 5rem;
`;

const TextPre2 = styled(TextPre)`
  text-align: center;
  font-size: 2.3rem;
  top: 12rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Btn = styled.button`
  width: 17rem;
  height: 6rem;
  border-radius: 20px;
  background: #8a5300;
  color: #fffeda;
  text-align: center;
  border: 2px solid #8a5300;

  font-family: 'KCC-Jeongbeom';

  font-size: 3rem;
`;

const StMbtiTitleIMG = styled.img`
  width: 23rem;
`;
