import cn from 'classnames'
import Link from 'next/link';
import { useState } from 'react'


const MENUITEMS = [
    { title: 'Blog', href:"/blog" },
    { title: 'Experiences', href:"/experience" },
    // { title: 'Contact', href:"/contact" },
]
export default function NavBar({ atTop, alwaysShowTitle, bgColor, isHeaderImage }){

    const [isMenuActive, setIsMenuActive] = useState(false);
    const customColoredNav =  (bgColor !== undefined && !isHeaderImage);
    return(
        <div className={cn("fixed w-full z-50 md:overflow-hidden",
        {
            [`${bgColor}`]: customColoredNav,
            'dark:bg-dark-primary bg-primary': bgColor === undefined && !isHeaderImage,
            ' shadow-md ' : !atTop,
            'dark:bg-dark-primary bg-primary ': !atTop && isHeaderImage
        })}>
                <div className="relative z-10 pt-3 sm:pt-4 max-w-screen-xl lg:w-full mx-auto ">
                    <div>
                        <div className="relative pb-3 sm:pb-4 px-4">
                            <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <Link href="/">
                                            <a>
                                                <span className="sr-only">Thomas Barratt</span>
                                                <img className="h-8 w-auto sm:h-10 inline-block" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
                                                { (!(atTop) || alwaysShowTitle)  && <span className="text-2xl px-4 font-display tracking-tighter leading-tight text-white align-middle">Thomas Barratt</span>}
                                            </a>
                                        </Link>
                                        <div className="-mr-2 flex items-center md:hidden">
                                        <button 
                                            type="button" 
                                            className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500  dark:hover:bg-gray-700"
                                            aria-expanded={!isMenuActive}
                                            onClick={() => { setIsMenuActive(!isMenuActive) }}
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                {MENUITEMS.map((menuItem) => (
                                    <Link href={menuItem.href}>
                                        <a className="text-lg text-gray-100 font-medium hover:text-gray-900 hover:border-gray-900 dark:hover:text-secondary dark:hover:border-secondary border-dashed border-b-2">{menuItem.title}</a>
                                    </Link>
                                ))}
                                </div>
                            </nav>
                        </div>

                        {/* <!--
                        Mobile menu, show/hide based on menu open state.

                        Entering: "duration-150 ease-out"
                            From: "opacity-0 scale-95"
                            To: "opacity-100 scale-100"
                        Leaving: "duration-100 ease-in"
                            From: "opacity-100 scale-100"
                            To: "opacity-0 scale-95"
                        --> */}
                    { isMenuActive && 
                    <div className={cn("absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ",{'hidden': !isMenuActive})}>
                            <div className="rounded-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">        
                                <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                                </div>
                                <div className="-mr-2">
                                    <button onClick={() => { setIsMenuActive(!isMenuActive) }} type="button" className="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close main menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden={!isMenuActive}>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    <Link href="/">
                                        <a className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 dark:hover:text-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white">Home</a>
                                    </Link>
                                    {MENUITEMS.map((menuItem) => (
                                        <Link href={menuItem.href}>
                                            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:hover:text-blue-400 hover:text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 ">{menuItem.title}</a>
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        </div>
                    }
                    </div>
                </div>
        </div>
    )
}