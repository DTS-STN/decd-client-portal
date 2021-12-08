import styles from '../../styles/Home.module.css'
const MessageNotification = () => {
  return (
    <div className="layout-container">
      <div className="py-4">
        <p className="text-2xl">
          <img src="/notification.svg" className="inline" />
          <span className="text-notificationText-solid"> 1</span> New Message{' '}
          <a href="#">
            <u>Go to Notifications and Message Centre</u>
          </a>
        </p>
      </div>
      <hr className="bg-bright-blue-royal h-tiny" />
    </div>
  )
}

export default MessageNotification