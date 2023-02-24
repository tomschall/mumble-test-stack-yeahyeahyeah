import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import Head from 'next/head';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!!session && <Button label="logout" onClick={() => signOut()} color="violet" icon="logout" />}

        {!session && (
          <a href="#" onClick={() => signIn('zitadel')}>
            <h2>Login &rarr;</h2>
            <p>Login with a ZITADEL account</p>
          </a>
        )}
      </main>
    </>
  );
}
