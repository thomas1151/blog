import Link from 'next/link'
import cn from 'classnames'

export default function Header(props) {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/">
    //     <a className="hover:underline">Blog</a>
    //   </Link>
    //   .
    // </h2>

    <>
      <header className={`w-full font-serif font-light relative bg-cover bg-center`}
        style={{ backgroundImage: `url(${props.coverImageUrl})`}}
    >
        <div style={{ backdropFilter: "blur(1em)" }} 

          className={
            cn(`absolute h-full w-full `,
            {[`bg-${props.bgColor} border-${props.bgColor}`] : props.bgColor && !props.coverImageUrl,
              'bg-primary border-primary' : !props.bgColor  && !props.coverImageUrl,
              'bg-transparentish' : props.coverImageUrl,
              'avec-triangle' : props.showTriangle
            }
            )
          }></div>
        {/* {props.coverImageUrl && <img
          src={props.coverImageUrl}
          alt="Cover image"
          className="mx-auto max-h-25vh py-8 self-center px-2"
        />} */}
        <div className={`md:flex rounded-lg ${props.smallHeader ? 'py-24' : 'py-40'} justify-left text-white relative max-w-screen-xl mx-auto px-4 xl:px-0`}>
          <div className='text-left  sm:px-4' >
          <h2 className='text-6xl md:text-7xl  font-display tracking-tighter leading-none mb-4 '>{props.title}</h2>
            <div className='text-2xl md:text-3xl  font-light tracking-tight opacity-85' dangerouslySetInnerHTML={{ __html: props.subtitle }}/>
        </div>
      </div>
    </header>
          <div className="mx-auto bg-gray-400 w-full  px-4 mb-6 pt-4 lg:px-0 shadow-sm">
        <div className=" m-auto container">

          <div className="text-left mx-auto">
          </div>
        </div>
      </div>
      </>
  )
}
