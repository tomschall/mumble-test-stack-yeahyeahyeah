import Link from 'next/link';
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
  key: string;
  createdTimestamp: number;
  mediaUrl: string;
  text: string;
}

export const MumblePost: React.FC<MumbleProps> = ({ key, createdTimestamp, mediaUrl, text }) => {
  return (
    <article
      key={key}
      tw="flex flex-col justify-start items-start w-full bg-slate-white py-32 pt-16 px-16 sm:px-48 rounded-lg mb-16"
    >
      <div tw="flex flex-row items-center gap-16 relative left-0 sm:-left-[86px]">
        <Avatar variant="medium" src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" alt="Username" />
        <div tw="flex flex-col">
          <User label="Username" variant="large" />
          <div tw="flex flex-row gap-16">
            <IconLink label="User" type="username" color="violet" href="/" legacyBehavior passHref linkComponent={Link} />
            <IconLink
              label={createdTimestamp.toString()}
              type="username"
              color="slate"
              href="/"
              legacyBehavior
              passHref
              linkComponent={Link}
            />
          </div>
        </div>
      </div>

      <Paragraph text={text} mbSpacing="16" />
      {mediaUrl && <ImageContainer src={mediaUrl} alt={text} />}
      <div tw="flex flex-row relative -left-16">
        <CommentButton quantity={0} />
        <LikeButton favourite={false} quantity={0} onClick={() => console.log('Like clicked')} />
      </div>
    </article>
  );
};
