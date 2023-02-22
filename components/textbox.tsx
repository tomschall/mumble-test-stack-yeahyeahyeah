import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { TextBox } from '@smartive-education/design-system-component-library-yeahyeahyeah';

export const WriteMumble: React.FC = () => {
  const [posts, setPosts] = useState(['']);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const addText = () => {
    if (inputValue === '') {
      setErrorMessage('Bitte füllen Sie das Feld aus.');
      return;
    }

    if (posts[0] === '') {
      setPosts([inputValue]);
      setInputValue('');
      return;
    }
    setPosts([...posts, inputValue]);
    setInputValue('');
  };

  const setErrorDebounced = useMemo(
    () =>
      debounce(() => {
        setErrorMessage('');
      }, 100),
    []
  );

  const handleUpload = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (inputValue !== '') {
      setErrorDebounced();
    }
  }, [inputValue, setErrorDebounced]);

  return (
    <TextBox
      variant="write"
      user={{
        label: 'Hey, was läuft?',
        avatar: {
          src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
          alt: 'Family Guy goes Mumble',
        },
      }}
      form={{
        errorMessage: errorMessage,
        placeholder: 'Hast du uns etwas mitzuteilen?',
      }}
      setInputValue={setInputValue}
      inputValue={inputValue}
      sendCallback={addText}
      uploadCallback={handleUpload}
    />
  );
};
