import PostTagsComponent from "./Tags";
import Image from "next/image";

const PostContentComponent = ({ post }: { post: Post }) => {
  return (
    <>
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
    </>
  );
};

export default PostContentComponent;
