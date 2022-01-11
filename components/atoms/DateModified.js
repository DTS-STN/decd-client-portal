import useTranslation from 'next-translate/useTranslation'

export default function DateModified() {
  const { t } = useTranslation('dashboard')

  return (
    <dl className="py-5 border-b-2 font-poppins text-gray-dark text-sm lg:mb-16 lg:py-0 lg:border-none">
      <dt className="inline font-poppins">{t('title_date_modified')}</dt>
      <dd className="inline font-poppins">{' ' + '2022-01-10'}</dd>
    </dl>
  )
}
