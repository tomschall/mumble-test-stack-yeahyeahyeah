import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Button, Container } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { Navi } from '@/components/navigation';
import { WelcomeText } from '@/components/welcome-text';
import { TextBoxComponent } from '@/components/textbox';
import { useState } from 'react';
import { fetchMumbles, Mumble } from '../services/qwacker';
import { MumblePost } from '@/components/mumble';

type PageProps = {
  count: number;
  mumbles: Mumble[];
  error?: string;
};

export default function Page({
  count: initialCount,
  mumbles: initialMumbles,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [mumbles, setMumbles] = useState(initialMumbles);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(initialCount);
  const [hasMore, setHasMore] = useState(initialMumbles.length < count);

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  const loadMore = async () => {
    const { count, mumbles: newMumbles } = await fetchMumbles({
      limit: 2,
      offset: mumbles.length,
    });

    setLoading(false);
    setHasMore(mumbles.length + newMumbles.length < count);
    setMumbles([...mumbles, ...newMumbles]);
  };

  return (
    <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
      <Navi />
      <Container layout="plain">
        <div tw="mb-16">
          <WelcomeText />
          <TextBoxComponent />
        </div>

        {mumbles.map((mumble) => (
          <MumblePost
            key={mumble.id}
            createdTimestamp={mumble.createdTimestamp}
            mediaUrl={mumble.mediaUrl}
            text={mumble.text}
          />
        ))}

        {hasMore ? (
          <Button onClick={() => loadMore()} disabled={loading} color="violet" label={loading ? '...' : 'Load more'} />
        ) : (
          ''
        )}
      </Container>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<PageProps> = async ({ req }: GetServerSidePropsContext) => {
  try {
    const { count, mumbles } = await fetchMumbles({ limit: 1 });

    return { props: { count, mumbles } };
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }

    return { props: { error: message, mumbles: [], count: 0 } };
  }
};
