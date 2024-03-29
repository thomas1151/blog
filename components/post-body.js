import { Breadcrumbs } from './breadcrumbs'

export default function PostBody({ content, contentMeta }) {
  return (
    <>

      <div className="max-w-screen-lg bg-gray-50 dark:bg-gray-900 px-8 py-6 font-display dark:text-white border-t border-b border-gray-200 dark:border-gray-800 shadow-md rounded-t-lg">
        {Breadcrumbs()}
        { contentMeta && <div className="w-full font-body">{contentMeta}</div> }
      </div>
      {/* {contentMeta && 
        <div className="max-w-screen-lg bg-gray-50 dark:bg-gray-900 px-8 pb-4 pt-2 dark:text-white border-b border-l border-r border-gray-200 dark:border-gray-500">

        </div>
      } */}
      <div className="max-w-screen-lg shadow-md border-gray-300 p-4 sm:p-8 bg-white dark:bg-gray-900 rounded-b-lg">
        <div
          className={`markdown dark:text-white`}
        >
         { content }
        </div>
      </div>

    </>
  )
}
