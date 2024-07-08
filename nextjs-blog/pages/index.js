import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} style={{ textAlign: 'center'}}>
        <p>I'm Kengo Matsumoto. I like pizza!!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} style={{ textAlign: 'center'}}>
        <h2 className={utilStyles.headingLg}>[ Projects ]</h2>
        <div>

          <a href='https://github.com/kengo0930mk/hello-world'>Hello World</a>

        </div>

        <div>

          <a href='https://github.com/kengo0930mk/Tic-Tac-Toe'>Tic Tac Toe</a>

        </div>

        <div>

          <a href='https://github.com/kengo0930mk/website'>blog</a>

        </div>
          
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
