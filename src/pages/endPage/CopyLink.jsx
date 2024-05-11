import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CopyLink = ({ content }) => {
  const [changeContent, setChangeContent] = useState(content);

  const handleCopyClipBoard = async () => {
    const text = 'https://wish-ebon.vercel.app/'; // 복사할 url
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

  font-size: 3rem;
`;

export default CopyLink;
