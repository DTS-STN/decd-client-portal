import useTranslation from 'next-translate/useTranslation'
import MyAccount from './MyAccount'

const MessageNotification = () => {
  const { t } = useTranslation('dashboard')
  return (
    <div className="layout-container md:flex">
      <div className="py-4">
        <p className="text-2xl mr-4">
          <img src="/notification.svg" className="inline" />
          <span className="text-notificationText-solid mx-2">1</span>
          {t('title_new_message')}
          <a className="ml-2 underline" href="#">
            {t('link_notification_center')}
          </a>
        </p>
      </div>
      <MyAccount />
    </div>
  )
}

export default MessageNotification
