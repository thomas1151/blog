import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import { generateAssetUrl, generateUrl } from '../lib/utils'

export default function HeroPost({
  title,
  coverImage,
  date,
  summary,
  author,
  slug,
  componentType
}) {  
  const url = generateUrl(componentType, slug)

  return (
    <section className=" shadow-md my-4 bg-white dark:text-white dark:bg-gray-900">
      <div className="relative w-full overflow-hidden">
        <div className="absolute w-full md:w-1/2 font-display z-10 text-3xl md:text-4xl lg:text-5xl uppercase sm:max-w-sm px-4 py-8 sm:px-8 text-white tracking-tighter leading select-none bg-gray-800 bg-opacity-75">
          Here's Something I've written.
        </div>
        <CoverImage customSizing={'sm:pb-1/3'} title={title} src={generateAssetUrl(componentType, slug, coverImage)} slug={slug} urlPacket={generateUrl(componentType,slug)} />
      </div>
      <div className=" md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 px-4">
        <div className="border-r border-gray-100 dark:border-gray-600">
          <h3 className="mb-4 text-3xl lg:text-3xl leading-tight pt-4">
            <Link as={url.as} href={url.href} legacyBehavior>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="border-l  border-gray-100 dark:border-gray-600">
          <p className="text-md leading-relaxed mb-4  p-4">{summary}</p>
        </div>
      </div>
    </section>
  )
}
