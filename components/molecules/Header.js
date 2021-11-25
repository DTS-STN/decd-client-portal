import Link from 'next/link'
import propTypes from 'prop-types'
import SearchBar from '../atoms/SearchBar'
import Nav from './Nav'

export default function Header() {
  const language = 'en'
  return (
    <header>
      <div className="layout-container flex justify-between py-5 items-center">
        <div className="flex flex-col items-center w-full md:mt-0 md:flex-row md:justify-between">
          <div className="flex justify-between items-center">
            <a href="https://www.canada.ca/en.html">
              <img
                className="h-6 sm:h-8 lg:h-7 xl:h-8"
                src={'/sig-blk-en.svg'}
                alt={'Government of Canada'}
              />
            </a>
            <div className="ml-7 md:hidden">
              <Link href="/">
                <a className="font-bold">FR</a>
              </Link>
            </div>
          </div>
          <SearchBar />
        </div>
        <div className="hidden md:inline">
          <Link
            key={language}
            href="/"
            locale={language === 'en' ? 'fr' : 'en'}
          >
            <a
              className="font-medium"
              data-cy="toggle-language-link"
              lang={language === 'en' ? 'fr' : 'en'}
            >
              {language === 'en' ? 'Français' : 'English'}
            </a>
          </Link>
        </div>
      </div>
      <Nav />
    </header>
  )
}
