import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import tw from 'twin.macro';
import Link from 'next/link';

import {
  Avatar,
  Container,
  CommentButton,
  LikeButton,
  User,
  IconLink,
  Paragraph,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { TextBoxComponent } from '@/components/textbox';

type Props = {
  mumble: {
    id: string;
  };
};

export default function MumblePage({ mumble }: Props): InferGetServerSidePropsType<typeof getServerSideProps> {
  return (
    <Container layout="plain">
      <ArticleMumble id={mumble.id}>
        <ArticleHeader>
          <Avatar variant="medium" src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" alt="Username" />
          <ArticleHeaderContent>
            <User label="Username" variant="large" />
            <ArticleDatas>
              <IconLink label="User" type="username" color="violet" />
              <IconLink
                label={'timestamp'}
                type="timestamp"
                color="slate"
                href="/"
                legacyBehavior
                passHref
                linkComponent={Link}
              />
            </ArticleDatas>
          </ArticleHeaderContent>
        </ArticleHeader>

        <Paragraph text={mumble.id} mbSpacing="16" />
        <ArticleInteraction>
          <CommentButton quantity={0} />
          <LikeButton favourite={false} quantity={0} onClick={() => console.log('Like clicked')} />
        </ArticleInteraction>
      </ArticleMumble>
      <TextBoxComponent />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  console.log({ id });

  return {
    props: {
      mumble: { id },
    },
  };
};

export const ArticleMumble = tw.article`flex flex-col justify-start items-start w-full bg-slate-white py-32 pt-16 px-16 sm:px-48 rounded-lg mb-16`;
export const ArticleHeader = tw.div`flex flex-row items-center gap-16 relative left-0 sm:-left-[86px] mb-32`;
export const ArticleHeaderContent = tw.div`flex flex-col`;
export const ArticleDatas = tw.div`flex flex-row gap-16`;
export const ArticleInteraction = tw.div`flex flex-row`;
