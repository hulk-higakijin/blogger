import { faBan, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SelectedTagComponent = ({ tag }: { tag: string }) => {
  return (
    <>
      {/* <div className="flex gap-2 border w-fit px-2 bg-gray-100 rounded-full text-gray-600 ">
        <FontAwesomeIcon icon={faTag} className="my-auto" />
        <p className="font-bold">{tag}</p>
        <Link href="/">
          <FontAwesomeIcon
            icon={faBan}
            className="my-auto text-sm text-gray-600 hover:text-red-500 hover:cursor-pointer pl-1"
          />
        </Link>
      </div> */}
    </>
  )
}

export default SelectedTagComponent
