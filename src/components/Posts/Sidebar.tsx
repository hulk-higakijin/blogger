import Image from 'next/image'
import Link from 'next/link'

const PostsSidebar = ({ allPosts }: { allPosts: Post[] }) => {
  return (
    <div className="my-10">
      <h2 className="text-lg font-bold px-4 py-2">最新記事</h2>
      {allPosts.map((post) => (
        <Link key={post.slug} href={`/${post.slug}`}>
          <div className="flex gap-2 py-2 border-b cursor-pointer hover:bg-gray-100">
            <div className="relative w-1/4 h-12">
              <Image
                src={post.thumbnail}
                alt="thumbnail"
                layout="fill"
                className="object-contain"
              />
            </div>
            <p className="my-auto w-3/4 text-sm">{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostsSidebar
