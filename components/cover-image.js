import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { generateAwsImage } from '../lib/utils'
import { useRef } from 'react';
import { useContainerDimensions } from '../hooks/useContainerDimensions'

export default function CoverImage({ title, src, slug, isSquare, urlPacket, customSizing }) {
  const componentRef = useRef()
  const { width } = useContainerDimensions(componentRef)
  const ImageWidther = () => <div  ref={componentRef} className={cn('relative w-full pb-2/3', {[`${customSizing}`]: customSizing, 'sm:pb-1/2': !customSizing})}/>
  return (

    slug ? (
        <Link as={urlPacket.as} href={urlPacket.href}>
          <a  aria-label={title} className={cn("sm:mx-0 overflow-hidden bg-center bg-no-repeat block",
            {'bg-contain my-4': isSquare})}
              style={{backgroundImage: `url(${generateAwsImage({src, width, quality: 125})})`}} 
          >
            <ImageWidther/>
          </a>
        </Link>

    ): (
      <div className={cn("sm:mx-0 overflow-hidden bg-center bg-no-repeat",
        {'bg-contain my-4': isSquare})}
          style={{backgroundImage: `url(${generateAwsImage({src, width, quality: 125})})`}} 
      >
        <ImageWidther/>
      </div>
    )
  )
}
