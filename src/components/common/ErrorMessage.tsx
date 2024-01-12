import React, {useState, useEffect} from 'react';

import ToastErrorMessage from '../Toast/ToastErrorMessage';

interface IProps {
  err: string | undefined;
  setErr: (err: string | undefined) => void;
}

export default function ErrorMessage({err, setErr}: IProps) {
  const [errorToastMessage, setErrorToastMessage] = useState('');
  const [modalErrorVisible, setModalErrorVisible] = useState(false);

  useEffect(() => {
    if (err) {
      setErrorToastMessage(err);
      setModalErrorVisible(true);
      setTimeout(() => {
        setModalErrorVisible(false);
        setErr(undefined);
      }, 3000);
    }
  }, [err]);

  return (
    <ToastErrorMessage
      modalVisible={modalErrorVisible}
      setModalVisible={setModalErrorVisible}
      errorMessage={errorToastMessage}
    />
  );
}
