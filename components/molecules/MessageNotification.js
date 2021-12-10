import useTranslation from 'next-translate/useTranslation'

const MessageNotification = () => {
  const { t } = useTranslation('dashboard')
  return (
    <div className="layout-container">
      <div className="py-4">
        <p className="text-2xl">
          <img src="/notification.svg" className="inline" />
          <span className="text-notificationText-solid mx-2">1</span>
          {t('title_new_message')}
          <a className="ml-2 underline" href="#">
            {t('link_notification_center')}
          </a>
        </p>
      </div>
      <hr className="bg-bright-blue-royal h-tiny" />
    </div>
  )
}

export default MessageNotification
