import type { InferGetStaticPropsType, NextPage } from "next";
import { getAllPosts } from "../lib/api";
import PostsComponent from "../components/Posts/Posts";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-3 gap-20">
        {allPosts.map((post) => (
          <PostsComponent key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
