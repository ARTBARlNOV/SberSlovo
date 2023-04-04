import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Info from '../Components/Info/Info';
import VerifyBar from '../Components/VerifyBars/VerifyBar/VerifyBar';
import Context from '../Context/context';

export default function MainPage() {
  const { info } = useContext(Context);
  return (
    <>
      <Navbar />
      {info ? (
        <Info />
      ) : (
        <VerifyBar />
      )}
    </>
  );
}
