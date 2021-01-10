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
    <div className="bg-white shadow-md">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={generateAssetUrl(componentType, slug, coverImage)} isSquare={isSquare} urlPacket={url} />
      </div>
      <div className="px-4">
      <h3 className="text-3xl mb-3 leading-snug">
          <Link as={url.as} href={url.href}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        { date && <DateFormatter dateString={date} /> }
      </div>
      <p className="text-md leading-relaxed mb-4">{summary}</p>
      </div>
    </div>
  )
}
