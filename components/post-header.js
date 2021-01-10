import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div className="mx-auto bg-white w-full  px-4 mb-6 py-4 lg:px-0 border-t-4 border-b-4 border-gray-200">
        <div className=" m-auto container">
          {/* <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div> */}
          <div className="text-left mx-auto">
            {author.name} on <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  )
}
