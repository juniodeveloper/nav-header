import Head from 'next/head';
import Navigation from '../components/navigation';
import styles from '../styles/Home.module.css';

const texts = [
  {
    id: 1,
    text: 'This is the first page',
  },
  {
    id: 2,
    text: 'This is the second page',
  },
  {
    id: 3,
    text: 'This is the third page',
  },
  {
    id: 4,
    text: 'This is the fourth page',
  },
  {
    id: 5,
    text: 'This is the last page',
  },
  {
    id: 6,
    text: 'This is the sixth page',
  },
  {
    id: 7,
    text: 'This is the seventh page',
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {
        texts.map(({ id, text }, index) => {
          return (
            <div key={id} className={styles.card}>
              <h3>{text}</h3>
            </div>
            )
        })
      }
    </>
  )
}