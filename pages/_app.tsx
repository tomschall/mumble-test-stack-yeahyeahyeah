// pages/_app.tsx
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/globals.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <GlobalStyles />
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;
