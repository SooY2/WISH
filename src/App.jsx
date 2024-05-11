import { useEffect } from 'react';
import GlobalStyles from './globalStyles';
import { MainPage } from './pages/MainPage';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

function App() {
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <GlobalStyles />
      <MainPage />
    </>
  );
}

export default App;
