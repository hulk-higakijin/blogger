const PostTagsComponent = ({ tags }: { tags: String[] }) => {
  return (
    <ul className="flex gap-2">
      {tags.map((tag, i) => (
        <li
          key={i}
          className="border border-gray-300 px-2 rounded-full text-gray-500 bg-gray-50 text-xs"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default PostTagsComponent;
