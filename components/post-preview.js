import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { generateAssetUrl, generateUrl } from '../lib/utils'


export default function PostPreview({
  title,
  coverImage,
  date,
  summary,
  slug,
  componentType,
  isSquare
}) {
  const url = generateUrl(componentType, slug)
  return (
    <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={generateAssetUrl(componentType, slug, coverImage)} isSquare={isSquare} urlPacket={url} />
      </div>
      <div className="px-4">
      <h3 className="text-2xl sm:text-3xl mb-1 sm:mb-3 leading-snug">
          <Link href={url.as} href={url.href}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      {date && <div className="text-lg mb-1 sm:mb-4">
         <DateFormatter dateString={date} /> 
      </div>}
      <p className="text-md leading-relaxed mb-4">{summary}</p>
      </div>
    </div>
  )
}
