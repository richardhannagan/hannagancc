import Link from 'next/link';
import Head from 'next/head';
import { getPosts } from '../utils/mdx-utils';
import Image from 'next/image'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <a href="https://github.com/richardhannagan">
          <h2 className="text-2xl dark:text-white text-center mb-2">my github contributions</h2>
        </a>
        <a href="https://github.com/richardhannagan">
          <Image
            src="https://ghchart.rshah.org/richardhannagan"
            alt="Richard Hannagans's GitHub Contributions Graph"
            width={663}
            height={104}
          />
        </a>
        <br></br>
        <a href="https://linkedin.com/in/richardhannagan">
          <h2 className="text-2xl dark:text-white text-center mb-2">add me on linkedin</h2>
        </a>
        <a href="https://linkedin.com/in/richardhannagan">
          <Image
            src="/linkedin-qr.PNG"
            alt="LinkedIn QR code"
            width={200}
            height={200}
            className="mx-auto"
          />
        </a>
        <br></br>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">

                {post.data.date && (
                  <p className="uppercase mb-3 font-bold opacity-60">
                    {post.data.date}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-3 text-lg opacity-60">
                    {post.data.description}
                  </p>
                )}
                <ArrowIcon className="mt-4" />

              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
