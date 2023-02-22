import tw from 'twin.macro';

export type IDefaultLayout = React.DOMAttributes<HTMLDivElement>;

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>;
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
