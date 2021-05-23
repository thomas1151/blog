import markdownStyles from './markdown-styles.module.css'
import { Breadcrumbs } from './breadcrumbs'

export default function PostBody({ content, contentMeta }) {
  const example = Breadcrumbs();

  return (
    <>

      <div className="max-w-screen-lg bg-gray-100 dark:bg-gray-700 p-4 font-display dark:text-white">
        {Breadcrumbs()}
      </div>
      {contentMeta && 
        <div className="max-w-screen-lg bg-gray-100 dark:bg-gray-700 p-4 font-display dark:text-white">
          { contentMeta }
        </div>
      }
      <div className="max-w-screen-lg shadow-md border-gray-300 p-4 sm:p-8 bg-white dark:bg-gray-900">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}
