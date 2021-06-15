import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import DateFormatter from './date-formatter'
import { BiRightArrowCircle } from "react-icons/bi";
import FormattedExternalLink from './link';


const FOOTER_LINKS = [
  { title: "Twitter", href: "https://twitter.com/thomas_1151"},
  { title: "GitHub", href: "https://github.com/thomas1151"},
  { title: "LinkedIn", href: "https://linkedin.com/in/thomas1151"}
]
export default function Footer() {
  return (
    <footer className=" bg-gray-800 dark:bg-gray-900 text-white pb-4">
      <div className="mx-auto bg-blue-800 w-full  px-4 mb-6 pt-4 lg:px-0 shadow-sm"/>
      <Container>
        <div className="flex flex-col lg:flex-row items-left sm:items-center ">
          <a href="/" className="text-2xl font-display tracking-tighter leading-tight text-center lg:text-left sm:mb-8 lg:mb-0 lg:pr-4 lg:w-1/4 py-4">
            Thomas Barratt
          </a>
          <div className="flex flex-col lg:flex-row justify-start sm:justify-center sm:items-center lg:pl-4 flex-grow	">
            {FOOTER_LINKS.map((link) => (
              <FormattedExternalLink
                href={link.href}
                className="mx-3 font-medium hover:underline text-white py-3"
                key={link.title}
              >
                {link.title}
              </FormattedExternalLink>
            ))}
          </div>
          <div className="text-center sm:text-right pt-4 sm:pt-0">
            {new Date().getFullYear()}, I made this stuff! (CC BY-SA 2.0)
          </div>
        </div>
      </Container>
    </footer>
  )
}
