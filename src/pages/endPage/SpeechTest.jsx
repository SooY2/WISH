import React, { useEffect, useState } from 'react';
import { getSpeech } from '../../utils/getSpeech';

const EndPage = () => {
  const [value, setValue] = useState('안녕하세요');

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleInput = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleButton = () => {
    getSpeech(value);
  };
  return (
    <div>
      <h1>TTS(한국어)</h1>
      <p>텍스트를 입력하고 음성 변환 버튼을 클릭하세요.</p>
      <div className='box'>
        <input onChange={handleInput} value={value} />
        <button onClick={handleButton}>음성 변환</button>
      </div>
    </div>
  );
};

export default EndPage;
