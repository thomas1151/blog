import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'

export default function GenericCard({ title, content, image, className, showTitle=true }) {

    return(
        <div className={cn("w-full  z-10", {[className]: className})}>
            {showTitle && title && <h2 className="font-display tracking-tighter leading-tight font-display underline pb-4 text-3xl md:text-4xl">{title}</h2>}
            <div className='w-full border-t border-gray-300 flex flex-wrap shadow-md bg-white' >
                { content &&
                    <div
                        className={`${markdownStyles['markdown']} px-4 py-2  ${image ? 'w-full md:w-3/4' : ' w-full'}`}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                }
                { image && 
                    <div class={cn("w-full border-t  md:border-l md:border-t-0 border-gray-300 flex w-full mx-auto",
                                {" md:w-1/4": content})}>
                        <img
                            src={image}
                            alt="Picture of the author"
                            className="mx-auto max-h-25vh py-8 self-center px-2"
                        />
                    </div>
                }
            </div>
        </div>
    ) 
}
