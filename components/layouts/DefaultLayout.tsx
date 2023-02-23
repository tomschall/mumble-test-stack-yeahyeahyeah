import tw from 'twin.macro';
import { Navi } from '../navigation';

export type IDefaultLayout = React.DOMAttributes<HTMLDivElement>;

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <LayoutStyles>
      <Navi />
      {children}
    </LayoutStyles>
  );
};

const LayoutStyles = tw.div`
  flex
  flex-col
  justify-center
  items-center
  bg-slate-200
  w-full
  h-full
  pb-64
`;
