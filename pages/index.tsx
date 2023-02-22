import React, { useState } from 'react';
import { FileRejection } from 'react-dropzone';

import { Container, UploadForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { Navi } from '@/components/navigation';
import { WelcomeText } from '@/components/welcome-text';
import { WriteMumble } from '@/components/textbox';

export default function Timeline() {
  const [showModal, setShowModal] = useState(false);
  const [fileUploadError, setFileUploadError] = useState('');

  const setTimerForError = () =>
    setTimeout(() => {
      setFileUploadError('');
    }, 2000);

  const onDropCallBack = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    console.log('acceptedFiles, fileRejections', acceptedFiles, fileRejections);
    fileRejections?.length && setFileUploadError(fileRejections[0].errors[0].message);
    setTimerForError();
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="plain">
          <WelcomeText />
          <WriteMumble />
          <UploadForm
            onDropCallBack={onDropCallBack}
            showModal={showModal}
            setShowModal={setShowModal}
            fileUploadError={fileUploadError}
          />
        </Container>
      </div>
    </>
  );
}
