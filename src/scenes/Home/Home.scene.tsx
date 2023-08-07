import Head from 'next/head';

import { NextPageWithLayout } from '@/types';

import Cards from './components/Cards/Cards';
import styles from './Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <Cards
        items={[
          {
            title: 'Documentation',
            excerpt:
              'Find in-depth information about Next.js features and API.',
            href: 'https://nextjs.org/docs',
          },
          {
            title: 'Learn',
            excerpt:
              'Learn about Next.js in an interactive course with quizzes!',
            href: 'https://nextjs.org/learn',
          },
          {
            title: 'Examples',
            excerpt:
              'Discover and deploy boilerplate example Next.js projects.',
            href: 'https://github.com/vercel/next.js/tree/canary/examples',
          },
          {
            title: 'Deploy',
            excerpt:
              'Instantly deploy your Next.js site to a public URL with Vercel.',
            href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
          },
        ]}
      />
    </>
  );
};

export default Home;