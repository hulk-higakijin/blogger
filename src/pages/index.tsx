import Head from "next/head";
import type { InferGetStaticPropsType, NextPage } from "next";
import { getAllPosts } from "../lib/api";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div>
      <h1 className="font-bold">記事一覧</h1>

      <div>
        {allPosts.map((post) => (
          <a href={post.slug} key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
