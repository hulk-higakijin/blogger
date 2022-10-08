import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import ProfileComponent from "../components/Layouts/Profile";
import Image from "next/image";
import PostsSidebarComponent from "../components/Posts/Sidebar";
import PostTagsComponent from "../components/Posts/Tags";

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
    <div className="container mx-auto flex flex-col md:flex-row gap-4">
      <div className="md:w-1/4 hidden md:block">
        <PostsSidebarComponent allPosts={allPosts} />
      </div>
      <div className="md:w-2/4 flex flex-col">
        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="flex">
            <PostTagsComponent tags={post.tags} />
            <p className="ml-auto text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
        <div className="relative h-96">
          <Image
            src={post.thumbnail}
            alt="thumbnail"
            layout="fill"
            className="md:rounded"
          />
        </div>
        <div
          className="prose prose-h1:text-xl prose-h1:mt-10 prose-h2:text-lg prose-h2:my-4 p-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className="md:w-1/4 p-4">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Post;
