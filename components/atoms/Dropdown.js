import Link from 'next/link'
import propTypes from 'prop-types'

export default function Dropdown({ text }) {
  return (
    <div className="flex items-center md:mx-7">
      <Link key="" href="/dashboard">
        <a>{text}</a>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mx-1.5 pb-1 rotate-180"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M3 20h18L12 4z" />
      </svg>
    </div>
  )
}

Dropdown.propTypes = {
  text: propTypes.string.isRequired,
}
