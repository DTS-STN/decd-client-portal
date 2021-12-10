import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LanguageToggle() {
  const router = useRouter()

  return (
    <div>
      <div className="hidden md:inline">
        <Link href={'/dashboard'} locale={router.locale === 'en' ? 'fr' : 'en'}>
          <a className="font-medium">
            {router.locale === 'en' ? 'Français' : 'English'}
          </a>
        </Link>
      </div>
      <div className="ml-7 md:hidden">
        <Link href={'/dashboard'} locale={router.locale === 'en' ? 'fr' : 'en'}>
          <a className="font-bold">{router.locale === 'en' ? 'FR' : 'EN'}</a>
        </Link>
      </div>
    </div>
  )
}
