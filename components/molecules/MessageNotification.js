import React, { useState } from 'react'

const MessageNotification = () => {
  return (
    <div className="layout-container">
      <div>
        <p>
          <img src="/notification.svg" class="inline" /> 1 messages.{' '}
          <a href="#">
            <u>Go to Notifications and Message Centre</u>
          </a>
        </p>
      </div>
    </div>
  )
}

export default MessageNotification
