import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { generateAwsImage } from '../lib/utils'
import { useRef } from 'react';
import { useContainerDimensions } from '../hooks/useContainerDimensions'

export default function CoverImage({ title, src, slug, isSquare, urlPacket, customSizing }) {
  console.log(src)
  const componentRef = useRef()
  const { width } = useContainerDimensions(componentRef)

  const image = (
    <img
      src={generateAwsImage({src, width, quality: 100})}
      className ={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        'mx-auto relative self-center max-w-xxs': isSquare,
        ' w-full absolute': !isSquare
      })}

    />
    // <Image
    //   loader={generateAwsImage}
    //   src={src}
    //   layout='intrinsic'
    //   objectFit={ isSquare ? 'contain' : 'cover'}
    //   width={6}
    //   height={4}
    //   alt={`Cover Image for ${title}`}
    //   className={cn('shadow-small', {
    //     'hover:shadow-medium transition-shadow duration-200': slug,
    //     'mx-auto relative self-center max-w-xxs': isSquare,
    //     ' w-full absolute': !isSquare
    //   })}
    // />
  )
  return (
    <div className="sm:mx-0 overflow-hidden">
      <div  ref={componentRef} className={cn('relative', {[`pb-2/3 ${customSizing ? customSizing : 'sm:pb-1/2'}`]: !isSquare}, {"mt-4":isSquare} )}>

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
