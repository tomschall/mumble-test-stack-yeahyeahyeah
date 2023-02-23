import { Heading, MumbleLogo, Paragraph } from '@smartive-education/design-system-component-library-yeahyeahyeah';

const PageNotFound: React.FC = () => {
  return (
    <div tw="flex flex-col justify-center items-center w-full h-full">
      <Heading
        label="Upps... Seite nicht gefunden."
        size="default"
        color="violet"
        tag="h1"
        alignment="center"
        mbSpacing="0"
      />
      <Paragraph text="Die angeforderte Seite existiert nicht." size="large" alignment="center" />
    </div>
  );
};

export default PageNotFound;
