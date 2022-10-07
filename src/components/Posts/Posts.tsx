import Image from "next/image";

const PostsComponent = ({ post }: { post: Post }) => {
  return (
    <>
      <a href={post.slug} className="flex flex-col gap-4">
        <div className="relative w-full h-60 object-cover">
          <Image
            src="https://cdn.devdojo.com/images/may2021/workout.jpg"
            layout="fill"
            className="rounded-xl"
            alt="thumbnail"
          />
        </div>
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <div className="text-sm text-gray-400 flex">
          <p>written by higakijin</p>
          <p className="ml-auto">{post.date}</p>
        </div>
      </a>
    </>
  );
};

export default PostsComponent;
