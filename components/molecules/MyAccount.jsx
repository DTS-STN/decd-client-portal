import useTranslation from 'next-translate/useTranslation'

const MyAccount = () => {
  const { t } = useTranslation('dashboard')
  return (
    <>
      <button
        className="md:mr-0 bg-transparent hover:bg-gray-200 text-black text-xl text-center py-2 rounded focus:ring-2 transition w-52"
        onClick={console.log('Your Account')}
      >
        <img src="/gear-svgrepo-com.svg" className="inline" />
        <span className="ml-2">{t('button_your_account')}</span>
      </button>
    </>
  )
}

export default MyAccount
