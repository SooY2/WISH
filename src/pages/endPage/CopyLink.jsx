import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CopyLink = ({ content }) => {
  const [changeContent, setChangeContent] = useState(content);

  const handleCopyClipBoard = async () => {
    const text = `https://wish-ebon.vercel.app/ 
엄마아빠할머니할아버지! 이거 한번 해보고
결과는 꼭 다시 나한테 알려줘! 무슨 유형인지 설명해줄게💖`; // 복사할 url
    try {
      await navigator.clipboard.writeText(text);
      setChangeContent('링크 복사완료!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button onClick={handleCopyClipBoard}>{changeContent}</Button>
    </>
  );
};

const Button = styled.button`
  width: 17rem;
  height: 6rem;
  border-radius: 20px;
  background: transparent;
  color: #8a5300;
  text-align: center;
  border: 2px solid #8a5300;

  font-family: 'KCC-Jeongbeom';

  font-size: 2.5rem;
`;

export default CopyLink;
