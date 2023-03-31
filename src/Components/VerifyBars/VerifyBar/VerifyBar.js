import React, { useContext } from 'react';
import './VerifyBar.css';
import NoSelectedFilesVerifyBar from '../NoSelectedFilesVerifyBar/NoSelectedFilesVerifyBar';
import SelectedVerifyBar from '../SelectedVerifyBar/SelectedVerifyBar';
import Context from '../../../Context/context';

export default function VerifyBar() {
  const { firstSelectedFile, secondSelectedFile } = useContext(Context);

  return (
    !firstSelectedFile && !secondSelectedFile ? (
      <NoSelectedFilesVerifyBar />
    ) : (
      <SelectedVerifyBar />
    )
  );
}
