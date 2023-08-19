import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'
import Image from 'next/image'
import useResize from '../hooks/useResize'
import { useContainerDimensions} from '../hooks/useContainerDimensions'
import { useRef } from 'react'
import SectionTitle from './sectionTitle'
import { generateAwsImage } from '../lib/utils'
import markdownToReact from '../lib/markdownToReact';

export default function GenericCard({ title, content, image, className, showTitle=true, imageAlt="", moreUrl, children }) {
  const componentRef = useRef()
  const { width, height } = useResize(componentRef)
  const imgComponentRef = useRef()
  const dimensions = useContainerDimensions(imgComponentRef)
  
  return(
    <div className={cn("w-full z-10 ", {[className]: className})}>
      {showTitle && title && <SectionTitle title={title} moreUrl={moreUrl} />}
      <div className='w-full flex flex-wrap shadow-md bg-white dark:bg-gray-900 dark:text-gray-50 self-center rounded-lg' >
        { content &&
          <div
          className={`px-4 py-4  ${image ? 'w-full md:w-3/4' : ' w-full'}`}
          >
          {markdownToReact(content)}
          </div> 
        }
        { children }
        { image && 
            <div ref={componentRef} className={cn("align-middle	w-full border-t relative md:border-t-0 border-gray-200 dark:border-gray-700 flex mx-auto py-4 height-xxs items-center px-2",
            {
              "md:w-1/4": content,
              "md:border-l": children || content,
            })}>
            <div className="relative w-full" ref={imgComponentRef}>
              {
              dimensions.width > 0 &&
                <img
                  src={generateAwsImage({src: image || '', width: dimensions.width, quality: 100})}
                  className="mx-auto rounded-lg shadow-md max-h-72 self-center "
                  alt={imageAlt}
                />            
              }
            </div>
            <div className="my-24" />
          </div>
        }
      </div>
    </div>
    ) 
  }
  