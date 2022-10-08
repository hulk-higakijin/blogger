import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import ProfileComponent from "../components/Layouts/Profile";
import PostsSidebarComponent from "../components/Posts/Sidebar";
import PostContentComponent from "../components/Posts/Content";
import Head from "next/head";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "date",
    "content",
    "thumbnail",
    "tags",
  ]);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  const allPosts = getAllPosts([
    "slug",
    "title",
    "date",
    "tags",
    "thumbnail",
    "tags",
  ]);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
      allPosts,
    },
  };
};

const Post: NextPage<Props> = ({ post, allPosts }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{ post.title } | higakijin-blogger</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 hidden md:block">
          <PostsSidebarComponent allPosts={allPosts} />
        </div>
        <div className="md:w-2/4 flex flex-col">
          <PostContentComponent post={post} />
        </div>
        <div className="md:w-1/4 p-4">
          <ProfileComponent />
        </div>
      </div>
    </>
  );
};

export default Post;
