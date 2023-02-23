import tw from 'twin.macro';
import { Navi } from '../navigation/navigation';

export type IDefaultLayout = React.DOMAttributes<HTMLDivElement>;

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return (
    <>
      <LayoutStyles>
        <Navi />
        {children}
      </LayoutStyles>
    </>
  );
};

const LayoutStyles = tw.div`
  flex
  flex-col
  justify-center
  items-start
  w-full
  pb-64
  bg-slate-200
`;
