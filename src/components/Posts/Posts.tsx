import Image from "next/image";
import PostTagsComponent from "./Tags";

const PostsComponent = ({ post }: { post: Post }) => {
  return (
    <>
      <a href={post.slug} className="flex flex-col gap-4">
        <div className="relative w-full h-60">
          <Image
            src={post.thumbnail}
            layout="fill"
            className="rounded-xl object-cover"
            alt="thumbnail"
          />
        </div>
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <div className="text-sm text-gray-400 flex flex-col">
          <PostTagsComponent tags={post.tags} />
          <p className="ml-auto">{post.date}</p>
        </div>
      </a>
    </>
  );
};

export default PostsComponent;
