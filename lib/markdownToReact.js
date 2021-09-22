import Image from 'next/image'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react  from 'remark-react'
import { generateAwsImage } from './utils'
//const highlight = require('remark-highlight.js')
import cn from 'classnames'
import ReactMarkdown from 'react-markdown'

const ImageWrapper = (props) => {
return(
<img
      src={props.src}//generateAwsImage({'src', width, quality: 125})}
      className={cn('shadow-md mx-auto')}
      alt={props.alt}
      />
      )
}
export default function markdownToReact(markdown) {
  return(
    <ReactMarkdown parserOptions={{ commonmark: true }} components={
      {
        img: ({node, ...props}) =><ImageWrapper {...props}/> 
      }
    }>
      {markdown}
    </ReactMarkdown>
  )
  // const result = unified()
  //   .use(parse)
  //   .use(remark2react, {
  //     remarkReactComponents: {
  //       // Use CustomLink instead of <a>
  //       img: ImageWrapper,
  //     },
  //   })
  //   .processSync(markdown).result
  // return result
}
