import type { InferGetStaticPropsType, NextPage } from "next";
import { getAllPosts } from "../lib/api";
import PostsComponent from "../components/Posts/Posts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectedTagComponent from "../components/Posts/SelectedTag";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "date",
    "tags",
    "thumbnail",
    "tags",
  ]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  const router = useRouter();
  const { tag } = router.query;
  const [posts, setPosts] = useState<Post[]>(allPosts);

  useEffect(() => {
    if (typeof tag == "string") {
      const selectedPosts = allPosts.filter((post) => post.tags.includes(tag));
      setPosts(selectedPosts);
    } else {
      setPosts(allPosts);
    }
  }, [allPosts, tag]);

  return (
    <div className="container mx-auto px-8 flex flex-col gap-4">
      {typeof tag == "string" && <SelectedTagComponent tag={tag} />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
        {posts.map((post) => (
          <PostsComponent key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
