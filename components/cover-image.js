import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, isSquare, urlPacket }) {
  console.log(src)
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        'mx-auto relative self-center max-w-xxs': isSquare,
        ' w-full absolute': !isSquare
      })}
    />
  )
  return (
    <div className="sm:mx-0 overflow-hidden">
      <div className={cn('relative', {"pb-2/3 sm:pb-1/3": !isSquare}, {"mt-4":isSquare} )}>

      {slug ? (
          <Link as={urlPacket.as} href={urlPacket.href}>
            <a aria-label={title} className={cn({ "w-full h-xxs flex": isSquare })}>{image}</a>
        </Link>
      ) : (
        image
      )}
      </div>

    </div>
  )
}
