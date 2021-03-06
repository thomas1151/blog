import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'
import Image from 'next/image'
import useResize from '../hooks/useResize'
import { useRef } from 'react'
import SectionTitle from './sectionTitle'
import { generateAwsImage } from '../lib/utils'

export default function GenericCard({ title, content, image, className, showTitle=true, imageAlt="", moreUrl, children }) {
    const componentRef = useRef()
    const { width, height } = useResize(componentRef)
    return(
        <div className={cn("w-full z-10 ", {[className]: className})}>
            {showTitle && title && <SectionTitle title={title} moreUrl={moreUrl} />}
            <div className='w-full flex flex-wrap shadow-md bg-white dark:bg-gray-900 dark:text-gray-50' >
                { content &&
                    <div
                        className={`${markdownStyles['markdown']} px-4 py-2  ${image ? 'w-full md:w-3/4' : ' w-full'}`}
                    >
                        {content}
                    </div> 
                }
                { children }
                { image && 
                    <div ref={componentRef} className={cn("align-middle	w-full border-t relative md:border-t-0 border-gray-200 dark:border-gray-700 flex mx-auto py-4 height-xxs",
                                {
                                    "md:w-1/4": content,
                                    "md:border-l": children || content,
                                })}>
                        <div className="relative w-full ">            
                                <Image
                                loader={generateAwsImage}
                                layout='fill' 
                                objectFit='contain'
                                src={image}
                                alt={imageAlt}
                                className="mx-auto  py-8 self-center px-2"
                                />
                        </div>
                        <div className="my-24" />
                    </div>
                }
            </div>
        </div>
    ) 
}
