import { Heading } from '@smartive-education/design-system-component-library-yeahyeahyeah';

export const WelcomeText: React.FC = () => {
  return (
    <>
      <Heading label="Willkommen auf Mumble" color="violet" tag="h2" size="default" mbSpacing="32" />
      <Heading
        label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
        color="light"
        tag="h4"
        size="default"
        mbSpacing="32"
      />
    </>
  );
};
