import markdownStyles from './markdown-styles.module.css'
import { Breadcrumbs } from './breadcrumbs'

export default function PostBody({ content, contentMeta }) {
  const example = Breadcrumbs();

  return (
    <>

      <div className="max-w-screen-lg bg-gray-50 dark:bg-gray-900 px-8 pt-4 pb-2 font-display dark:text-white border-t border-gray-200 dark:border-gray-500">
        {Breadcrumbs()}
      </div>
      {contentMeta && 
        <div className="max-w-screen-lg bg-gray-50 dark:bg-gray-900 px-8 pb-4 pt-2 dark:text-white border-b border-gray-200 dark:border-gray-500">
          { contentMeta }
        </div>
      }
      <div className="max-w-screen-lg shadow-md border-gray-300 p-4 sm:p-8 bg-white dark:bg-gray-900">
        <div
          className={`${markdownStyles['markdown']} markdown dark:text-white`}
        >
         { content }
        </div>
      </div>

    </>
  )
}
