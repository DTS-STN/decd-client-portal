import React, { useState } from 'react'

const Greeting = (props) => {
  return (
    <section>
      <div className="layout-container font-bold text-4xl">
        Good Morning, {props.name}. Welcome to your My Service Account
      </div>
    </section>
  )
}

export default Greeting
