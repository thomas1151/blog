import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import DateFormatter from './date-formatter'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 bg-blue-500 text-white pb-4">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-left sm:items-center ">
          <a href="/" className="text-2xl font-display tracking-tighter leading-tight text-center lg:text-left mt-4 mb-8 lg:mb-0 lg:pr-4 lg:w-1/4 py-4">
            Thomas Barratt
          </a>
          <div className="flex flex-col lg:flex-row justify-start sm:justify-center sm:items-center lg:pl-4 lg:w-3/4">
            <a
              href="https://twitter.com/thomas_1151"
              className="mx-3 font-light hover:underline text-white font-light py-3"
            >
              Twitter
            </a>
            <a
              href={`https://github.com/thomas1151`}
              className="mx-3 font-light hover:underline"
            >
              GitHub (there won't be much there)
            </a>
            <div>
              2020, I made this stuff! (CC BY-SA 2.0)
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
