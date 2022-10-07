import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

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
  const post = getPostBySlug(params.slug, ["slug", "title", "date", "content"]);
  // Markdown を HTML に変換する
  const content = await markdownToHtml(post.content);
  // content を詰め直して返す
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="container mx-auto p-8 flex gap-10">
      <div className="w-1/4">
        <p>ブログツリーを表示</p>
      </div>
      <div className="w-2/4 flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="ml-auto text-sm">{post.date}</p>
        </div>
        <div
          className="prose prose-h1:text-xl prose-h1:mt-10 prose-h2:text-lg prose-h2:my-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className="w-1/4">プロフィールを表示</div>
    </div>
  );
};

export default Post;
