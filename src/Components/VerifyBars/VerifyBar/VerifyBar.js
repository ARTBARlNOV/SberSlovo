import React, { useContext } from 'react';
import './VerifyBar.css';
import NoSelectedFilesVerifyBar from '../NoSelectedFilesVerifyBar/NoSelectedFilesVerifyBar';
import Context from '../../../Context/context';
import SelectedFilesVerifyBar from '../SelectedFilesVerifyBar/SelectedFilesVerifyBar';

export default function VerifyBar() {
  const { firstSelectedFile, secondSelectedFile } = useContext(Context);

  return (
    !firstSelectedFile && !secondSelectedFile ? (
      <NoSelectedFilesVerifyBar />
    ) : (
      <SelectedFilesVerifyBar />
    )
  );
}
