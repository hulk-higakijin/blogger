import Link from "next/link";

const PostTagsComponent = ({ tags }: { tags: String[] }) => {
  return (
    <ul className="flex gap-2">
      {tags.map((tag, i) => (
        <Link key={i} href={`/?tag=${tag}`}>
          <li
            key={i}
            className="border border-gray-300 px-2 rounded-full text-gray-500 bg-gray-50 text-xs cursor-pointer"
          >
            {tag}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default PostTagsComponent;
