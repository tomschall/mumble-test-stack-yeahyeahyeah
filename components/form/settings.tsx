import React, { useEffect, useMemo, useState } from 'react';
import { InputForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';

export const FormSettings: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePressEnter = () => {
    if (inputValue === '') {
      setErrorMessage('Bitte füllen Sie das Formular aus.');
      return;
    }
    setInputValue('');
  };

  const setErrorDebounced = useMemo(
    () =>
      debounce(() => {
        setErrorMessage('');
      }, 100),
    []
  );

  useEffect(() => {
    if (inputValue !== '') {
      setErrorDebounced();
    }
  }, [inputValue, setErrorDebounced]);

  return (
    <>
      <InputForm
        label="Name und Vorname"
        editType={'input'}
        placeholder={'Bitte geben sie einen Text ein '}
        required={true}
        autoComplete={'off'}
        setInputValue={setInputValue}
        inputValue={inputValue}
        errorMessage={errorMessage}
        onPressEnter={handlePressEnter}
        data-testid={'name'}
      />
      <InputForm
        key={'email'}
        label="E-Mail"
        editType={'input'}
        placeholder={'Bitte geben sie einen Text ein '}
        required={true}
        autoComplete={'off'}
        setInputValue={setInputValue}
        inputValue={inputValue}
        errorMessage={errorMessage}
        onPressEnter={handlePressEnter}
        data-testid={'email'}
      />
    </>
  );
};
