import useTranslation from 'next-translate/useTranslation'

const Greeting = ({ name }) => {
  const { t } = useTranslation('dashboard')
  return (
    <section>
      <div className="layout-container font-bold font-display text-4xl">
        {t('greeting_message', { name: name })}
      </div>
    </section>
  )
}

export default Greeting
