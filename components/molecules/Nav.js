import Link from 'next/link'
import Dropdown from '../atoms/Dropdown'
import useTranslation from 'next-translate/useTranslation'

export default function Nav() {
  const { t } = useTranslation('dashboard')
  return (
    <div className="bg-deep-blue-solid text-white py-2.5">
      <div className="layout-container flex justify-between items-center">
        <h1 className="font-display text-white text-xl">{t('title_nav')}</h1>
        <div className="hidden font-body text-sm md:flex md:items-center">
          <Dropdown text={t('nav_link_services')} />
          <Dropdown text={t('nav_link_life_journey')} />
          <Dropdown text={t('nav_link_contact')} />
        </div>
        <Link key="" href="/">
          <a className="hidden font-body text-sm md:block">{t('logout')}</a>
        </Link>
        <div className="md:hidden">
          <Dropdown text="Menu" />
        </div>
      </div>
    </div>
  )
}
