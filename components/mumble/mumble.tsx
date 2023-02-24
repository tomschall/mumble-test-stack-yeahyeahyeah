import tw from 'twin.macro';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'dayjs/locale/de-ch';
import dayjs from 'dayjs';

import {
  Avatar,
  CommentButton,
  LikeButton,
  ImageContainer,
  User,
  IconLink,
  Paragraph,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';

export interface MumbleProps {
  id: string;
  createdTimestamp: number;
  mediaUrl: string;
  text: string;
}

export const MumblePost: React.FC<MumbleProps> = ({ id, createdTimestamp, mediaUrl, text }) => {
  const router = useRouter();
  const handleCommentMumbleSingleView = (id: string) => {
    router.push(`/mumble/${id}`);
  };

  const handleShowUser = () => {
    router.push(`/profilepage`);
  };

  const convertedTime = dayjs(createdTimestamp).locale('de-ch').format('DD.MM.YYYY HH:MM:ss');

  return (
    <ArticleMumble id={id}>
      <ArticleHeader>
        <Link href="/profilepage" title="username" target="_self">
          <Avatar variant="medium" src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" alt="Username" />
        </Link>
        <ArticleHeaderContent>
          <User label="Username" variant="large" />
          <ArticleDatas>
            <IconLink label="User" type="username" color="violet" onClick={handleShowUser} />
            <IconLink
              label={convertedTime}
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

      <Paragraph text={text} mbSpacing="16" />
      {mediaUrl && <ImageContainer src={mediaUrl} alt={text} />}
      <ArticleInteraction>
        <CommentButton quantity={0} onClick={() => handleCommentMumbleSingleView(id)} />
        <LikeButton favourite={false} quantity={0} onClick={() => console.log('Like clicked')} />
      </ArticleInteraction>
    </ArticleMumble>
  );
};

export const ArticleMumble = tw.article`flex flex-col justify-start items-start w-full bg-slate-white py-32 pt-16 px-16 sm:px-48 rounded-lg mb-16`;
export const ArticleHeader = tw.div`flex flex-row items-center gap-16 relative left-0 sm:-left-[86px] mb-32`;
export const ArticleHeaderContent = tw.div`flex flex-col`;
export const ArticleDatas = tw.div`flex flex-row gap-16`;
export const ArticleInteraction = tw.div`flex flex-row`;
