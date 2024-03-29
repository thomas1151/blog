import cn from 'classnames'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

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
    <ReactMarkdown parserOptions={{ commonmark: true }} rehypePlugins={[rehypeRaw]} components={
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
