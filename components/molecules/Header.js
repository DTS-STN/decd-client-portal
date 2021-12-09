import LanguageToggle from '../atoms/LanguageToggle'
import SearchBar from '../atoms/SearchBar'
import Nav from './Nav'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <header>
      <div className="layout-container flex justify-between py-5 items-center">
        <div className="flex flex-col items-center w-full md:mt-0 md:flex-row md:justify-between">
          <div className="flex justify-between items-center">
            <a href="https://www.canada.ca/en.html">
              <img
                className="h-6 sm:h-8 lg:h-7 xl:h-8"
                src={
                  router.locale === 'en' ? '/sig-blk-en.svg' : '/sig-blk-fr.svg'
                }
              />
            </a>
          </div>
          <SearchBar />
        </div>
        <LanguageToggle />
      </div>
      <Nav />
    </header>
  )
}
