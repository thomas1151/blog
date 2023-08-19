import Link from 'next/link'
import cn from 'classnames'
import NavBar from './navbar'
import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import markdownToReact from '../lib/markdownToReact';

export default function Header(props) {

  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  const headerStyles = {};
  if(props.coverImageUrl && !props.disableHeaderImage){
    headerStyles.backgroundImage =  `url(${props.coverImageUrl})`
  }
  const isHeaderImage =  !(props.disableHeaderImage === true || props.coverImageUrl === undefined);
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/">
    //     <a className="hover:underline">Blog</a>
    //   </Link>
    //   .
    // </h2>

    <>
      <NavBar atTop={inView} alwaysShowTitle={props.alwaysShowTitle} bgColor={props.bgColor} isHeaderImage={isHeaderImage}  />
      <header className={`w-full font-serif font-light relative bg-cover bg-center`}
        style={headerStyles}  
      >
        {props.children}
        <div style={{ backdropFilter: "blur(1em)" }}

          className={
            cn(`absolute h-full w-full `,
              {
                [`${props.borderColor}`]: (props.borderColor === true),
                [`${props.bgColor}`]: (props.bgColor !== undefined && !isHeaderImage),
                'bg-primary border-primary dark:bg-dark-primary dark:border-dark-primary': props.bgColor === undefined && props.coverImageUrl === undefined,
                'bg-transparentish': props.coverImageUrl && !props.disableHeaderImage,
                'avec-triangle': props.showTriangle
              }
            )
          }></div>
        <div ref={ref} className={`md:flex rounded-lg ${props.smallHeader ? 'pb-20 pt-36' : 'pb-40 md:pb-44 pt-32 md:pt-52'} justify-left text-white dark:text-gray-50 relative max-w-screen-xl mx-auto px-4 xl:px-0 z-40`}>
          <div className='text-left sm:px-4'>
            <h2 className={cn('lg:text-7xl font-display font-bold tracking-tight leading-none', {'mb-4': !props.date, 'text-5xl': !props.bigText, 'text-6xl': props.bigText})}>{props.title}</h2>
            {props.date && <div className='text-2xl font-display md:text-3xl tracking-tight opacity-90 pb-4 mb-4'>{ new Date(props.date).toLocaleDateString()}</div>}
            <div className='text-2xl md:text-3xl font-light tracking-tight opacity-90'> {markdownToReact(props.subtitle)} </div>
          </div>
        </div>
      </header>
      <div className={cn("mx-auto w-full px-4 mb-6 pt-4 lg:px-0 shadow-sm",{
        "bg-tb dark:bg-primary" : !props.bgAccentColor,
        [`${props.bgAccentColor}`]: props.bgAccentColor
      })}>
        <div className=" m-auto container">
          <div className="text-left mx-auto">
          </div>
        </div>
      </div>
    </>
  )
}
