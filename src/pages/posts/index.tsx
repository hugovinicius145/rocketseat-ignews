import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>19 de Outubro de 2021</time>
            <strong>Creating a Monorep with Lerna & Yarn Workspacea</strong>
            <p>Is this guide, you will learn how to create a Monorep to manage multiples packages with ...</p>            
          </a>
          <a href="">
            <time>19 de Outubro de 2021</time>
            <strong>Creating a Monorep with Lerna & Yarn Workspacea</strong>
            <p>Is this guide, you will learn how to create a Monorep to manage multiples packages with ...</p>            
          </a>
          <a href="">
            <time>19 de Outubro de 2021</time>
            <strong>Creating a Monorep with Lerna & Yarn Workspacea</strong>
            <p>Is this guide, you will learn how to create a Monorep to manage multiples packages with ...</p>            
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  console.log(response);

  return {
    props: {

    }
  }
}