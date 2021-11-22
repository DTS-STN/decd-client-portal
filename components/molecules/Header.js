import Link from 'next/link'
import propTypes from 'prop-types'
import SearchBar from '../atoms/SearchBar'
import Nav from './Nav'

export default function Header() {
  const language = 'en'
  return (
    <header>
      <div className="layout-container flex justify-between py-5">
        <div>
          <a href="https://www.canada.ca/en.html">
            <img
              className="xs:h-6 sm:h-8 md:h-8 lg:h-7 xl:h-8"
              src={'/sig-blk-en.svg'}
              alt={'Government of Canada'}
            />
          </a>
        </div>
        <div className="flex items-center">
          <SearchBar />
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

Header.propTypes = {
  /**
   * Translated text
   */
  t: propTypes.object,
}
