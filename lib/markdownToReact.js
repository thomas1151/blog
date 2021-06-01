import Image from 'next/image'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react  from 'remark-react'
import { generateAwsImage } from './utils'
//const highlight = require('remark-highlight.js')

const ImageWrapper = (props) => <Image {...props} loader={generateAwsImage} layout='fill'/>

export default function markdownToReact(markdown) {
  const result = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        // Use CustomLink instead of <a>
        img: ImageWrapper,
      },
    })
    .processSync(markdown).result
  return result
}
